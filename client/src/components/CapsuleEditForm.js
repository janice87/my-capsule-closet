import React, { useContext, useState, useEffect } from "react"; 
import {UserContext} from '../context/user' 
import {useParams, useHistory} from 'react-router-dom'
import { Box, Container, Button, Typography, TextField} from '@mui/material';

const CapsuleEditForm = ({onEditCapsule}) => {
    const {currentUser} = useContext(UserContext);
    const [updatedCapsule, setUpdatedCapsule] = useState({
        capsule_name: "",
        user_id: currentUser.id
    })
    const [errors, setErrors] = useState([])
    const {id} = useParams()
    const history = useHistory()

    useEffect(() => {
        fetch(`/capsules/${id}`)
        .then(res => {
            if(res.ok) {
                res.json().then(capsuleObj => setUpdatedCapsule(capsuleObj))
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/capsules/${id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(updatedCapsule) 
        })
        .then(res => {
            if(res.ok) {
                res.json().then(data => {               
                    onEditCapsule(data)
                } )
                history.push(`/capsules`)
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    }

    const handleOnchange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setUpdatedCapsule({
            ...updatedCapsule,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <div>
        <Container maxWidth="xs">
        <Box
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
          <Typography variant="h6" align="center" style={{ marginBottom: "1em", marginTop: "1em" }}>EDIT CAPSULE NAME</Typography> 
          <br /> 
        </Box>
        </Container>  

        <Container maxWidth="m">
          <Box       
          display="flex"
          justifyContent="center"
          alignItems="center"
          >        
            <form onSubmit={handleSubmit}>          
            <TextField                   
                  id="outlined-size-small"
                  name="capsule_name" 
                  onChange={handleOnchange} 
                  value={updatedCapsule.capsule_name}             
                  style={{ marginBottom: "15px", width: "300px" }}  
                  variant="outlined"
                  label="Capsule Name"
                  InputLabelProps={{
                    shrink: true,
                  }}       
                 /> 
            <br/>
            <Button type="submit" variant="contained" style={{ marginBottom: "15px", width: "300px" }}>Submit</Button>
             {errors ? errors.map(error => <li key={error}>{error}</li>) : null }            
             </form>             
          </Box>
        </Container>   
        </div>
    )

}

export default CapsuleEditForm;