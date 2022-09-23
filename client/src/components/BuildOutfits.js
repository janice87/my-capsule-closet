import {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { Box, Container, Typography, Select, MenuItem, Button } from '@mui/material';

const BuildOutfits = ({onAddOutfitItem}) => {
    const [outfits, setOutfits] = useState([])
    const [items, setItems] = useState([])
    const [outfitId, setOutfitId] = useState("")
    const [itemId, setItemId] = useState("")
    const [errors, setErrors] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetch('/outfits')
        .then(res => res.json())
        .then(data => setOutfits(data))     
        
        fetch('/items')
        .then(res => res.json())
        .then(data => setItems(data))  
    },[])


    const handleSubmit = () => {
        fetch('/outfit_items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                outfit_id: outfitId,
                item_id: itemId
            })
        })
        .then(res => {
            if(res.ok) {
                res.json().then(data => {
                    onAddOutfitItem(data)
                    history.push('/capsules')
                })
            } else {
                res.json().then(data => {
                     console.log(data.errors)
                     setErrors(data.errors)
                })
            }
        })
    }

    const outfitOptions = outfits.map(outfit => 
        <MenuItem value={outfit.id} key={outfit.id}>{outfit.outfit_name}</MenuItem>        
    )
  
    const itemOptions = items.map(item => 
        <MenuItem value={item.id} key={item.id}>{item.brand} {item.item_name}</MenuItem>        
    )

    
    return (
        <div>
        <Container maxWidth="xs">
        <Box
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
          <Typography variant="h5" align="center" style={{ marginBottom: "1em", marginTop: "1em" }}>Build Outfit </Typography> 
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
            <Select
          name="capsule"
          id="capsule"
          value={outfitId}
          label="Select Capsule"              
          onChange={e => setOutfitId(e.target.value)} 
          style={{ marginBottom: "15px", width: "300px" }}            
        >    
          {outfitOptions}       
        </Select>  

        <Select
          name="item"
          id="item"
          value={itemId}
          label="Select Capsule"              
          onChange={e => setItemId(e.target.value)} 
          style={{ marginBottom: "15px", width: "300px" }}            
        >    
          {itemOptions}       
        </Select>  
        <Button type="submit" variant="outlined">Submit</Button>
            {errors ? errors.map(error => <li key={error}>{error}</li>) : null } 

            </form>       
            </Box>
        </Container>  

        </div>
    )

}

export default BuildOutfits