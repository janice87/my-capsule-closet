import {useState, useEffect} from 'react'
import { Box, Container, Button, TextField, MenuItem, Select} from '@mui/material';

//const NewOutfitForm = ({capsule, onAddNewOutfit}) => {
const NewOutfitForm = ({onAddNewOutfit}) => {
    const [outfitName, setOutfitName] = useState("")
    const [capsules, setCapsules] = useState([])
    const [capsuleId, setCapsuleId] = useState("")
    const [errors, setErrors] = useState([])
    // const {id} = capsule

    useEffect(() => {
        fetch('/capsules')
        .then(res => res.json())
        .then(data => setCapsules(data)) 
    },[])

    // pass in capsule id
    const handleSubmit = () => {
        fetch('/outfits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                capsule_id: capsuleId,
                outfit_name: outfitName})            
        })
        .then(res => {
            if(res.ok) {
                res.json().then(newOutfit => {
                    console.log(newOutfit, "add new outfit")
                    onAddNewOutfit(newOutfit)
                } )
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
          <Container maxWidth="m">
          <Box       
          display="flex"
          justifyContent="center"
          alignItems="center"
          >   
          <form onSubmit={handleSubmit}>        
            <Select
            name="capsule"
            id="capsule"
            value={capsuleId}
            label="Select Capsule"              
            onChange={e => setCapsuleId(e.target.value)} 
            style={{ marginBottom: "15px", width: "300px" }}            
            >    
            {capsuleOptions}       
            </Select> 
            
            <TextField                   
                  id="outlined-size-small"
                  name="outfitName" 
                  onChange={e => setOutfitName(e.target.value)} 
                  value={outfitName}             
                  style={{ marginBottom: "15px", marginTop: "15px", width: "300px" }}  
                  variant="outlined"
                  label="Outfit Name"
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
      
      export default NewOutfitForm