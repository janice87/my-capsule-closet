import React, { useState, useContext  } from "react"; 
import {UserContext} from '../context/user'  
import { Box, Container, Button, TextField} from '@mui/material';

const NewCapsuleForm = ({onAddCapsule}) => {
    const [capsuleName, setCapsuleName] = useState("")
    const {currentUser} = useContext(UserContext)
    const [errors, setErrors] = useState([])
 
const handleSubmit = () => {
        fetch('/capsules', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                capsule_name: capsuleName,
                user_id: currentUser.id
            })            
        })
        .then(res => {
            if(res.ok) {
                res.json().then(newCapsule => onAddCapsule(newCapsule))
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    }

    return (
        <div>       
          <Container maxWidth="m">
          <Box       
          display="flex"
          justifyContent="center"
          alignItems="center"
          >   
          <form onSubmit={handleSubmit}>
          <TextField                   
                  id="outlined-size-small"
                  name="capsuleName" 
                  onChange={e => setCapsuleName(e.target.value)} 
                  value={capsuleName}             
                  style={{ marginBottom: "15px", marginTop: "15px", width: "250px" }}  
                  variant="outlined"
                  label="Capsule Name"
                  InputLabelProps={{
                    shrink: true,
                  }}       
                 /> 
            <Button type="submit" variant="outlined">Submit</Button>
            {errors ? errors.map(error => <li key={error}>{error}</li>) : null } 
            </form>  
        </Box>
        </Container> 
        </div>
        );
      }
      
      export default NewCapsuleForm