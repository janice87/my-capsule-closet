import React, { useState, useContext  } from "react"; 
import {UserContext} from '../context/user'  
import { Box, Container, Button, TextField, Typography} from '@mui/material';

const NewCapsuleForm = ({onAddCapsule}) => {
    const [capsuleName, setCapsuleName] = useState("")
    const {currentUser} = useContext(UserContext)
    const [errors, setErrors] = useState([])
 
const handleSubmit = (e) => {
    e.preventDefault()
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
                res.json().then(newCapsule => {
                    onAddCapsule(newCapsule)
                    setCapsuleName("")                    
                })
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
                  variant="outlined"
                  size="small"
                  name="capsuleName" 
                  onChange={e => setCapsuleName(e.target.value)} 
                  value={capsuleName}           
                  label="Capsule Name"                        
                  style={{ marginBottom: "15px", marginTop: "15px", marginRight: "10px", marginLeft: "10px", width: "180px", height: 30 }}  
                  InputLabelProps={{
                    shrink: true,
                  }}       
                 /> 
                 <Button type="submit" variant="contained" color="primary" style={{ marginBottom: "15px", marginTop: "20px", marginRight: "10px", marginLeft: "1px", width: "30px", height: 30 }} >Submit</Button>
                 
                 <Typography variant="button">
                 {errors ? errors.map(error => <li key={error}>{error}</li>) : null } 
                 </Typography>
            </form>  
        </Box>
        </Container> 
        </div>
        );
      }
      
      export default NewCapsuleForm