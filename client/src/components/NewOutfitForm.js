import React, {useState, useContext} from 'react'
import {UserContext} from '../context/user' 
import { Box, Container, Button, TextField, MenuItem, Typography} from '@mui/material';

const NewOutfitForm = ({onAddNewOutfit, capsules}) => {
    const [outfitName, setOutfitName] = useState("")
    const [capsuleId, setCapsuleId] = useState("")
    const [errors, setErrors] = useState([])
    const {currentUser} = useContext(UserContext)
   
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/outfits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                capsule_id: capsuleId,
                outfit_name: outfitName,
                user_id: currentUser.id
        })            
        })
        .then(res => {
            if(res.ok) {
                res.json().then(newOutfit =>{                                       
                    onAddNewOutfit(newOutfit)
                    setOutfitName("")
                })
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    }

    const capsuleOptions = capsules.map(capsule => 
        <MenuItem value={capsule.id} key={capsule.id}>{capsule.capsule_name}</MenuItem>        
    )

    return (
        <div>       
          <Container maxWidth="sm">
          <Box       
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          >   
          <form onSubmit={handleSubmit}>    
            <TextField
                variant="outlined"
                size="small"
                name="capsuleId"            
                value={capsuleId}             
                onChange={e => setCapsuleId(e.target.value)}  
                select
                label="Select Capsule"
                style={{ marginBottom: "10px", marginTop: "10px", marginRight: "10px", marginLeft: "10px", width: "180px", height: 30 }} 
                >
                {capsuleOptions}   
            </TextField>
           
            <TextField                 
                  variant="outlined"
                  size="small"
                  name="outfitName"                   
                  value={outfitName}             
                  onChange={e => setOutfitName(e.target.value)} 
                  label="Outfit Name"
                  style={{ marginBottom: "10px", marginTop: "10px", marginRight: "10px", marginLeft: "10px", width: "180px", height: 30 }}  
                  InputLabelProps={{
                    shrink: true,
                  }}       
                 />               
            <Button type="submit" variant="contained" color="primary" style={{ marginBottom: "15px", marginTop: "15px", marginRight: "10px", marginLeft: "1px", width: "30px", height: 30 }} >Submit</Button>
          
            <Typography variant="button">
            {errors ? errors.map(error => <li key={error}>{error}</li>) : null }     
            </Typography>      
            </form>            
        </Box> 
        </Container>  
        </div>
        );
      }
      
      export default NewOutfitForm