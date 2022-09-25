import {useState} from 'react'
import { useHistory } from 'react-router-dom';
// import { Box, Container, Select, MenuItem, Button, InputLabel } from '@mui/material';
import { Box, Container, MenuItem, Button, TextField } from '@mui/material';

const BuildOutfits = ({onAddOutfitItem, outfits, items}) => {
    const [outfitId, setOutfitId] = useState("")
    const [itemId, setItemId] = useState("")
    const [errors, setErrors] = useState([])
    const history = useHistory()
  
    const handleSubmit = (e) => {
        e.preventDefault()
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
                    history.push(`/capsules`)
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

    // const itemOptions = items
    // .sort((itemA, itemB) => itemA.brand.localeCompare(itemB.brand))    
    // .map(item => <MenuItem value={item.id} key={item.id}>{item.brand} {item.item_name}</MenuItem>)
      
    return (
        <div>      
        <Container maxWidth="sm">
          <Box       
          display="flex"   
          flexDirection="row"      
          justifyContent="center"
          alignItems="center"
          >         
         <form onSubmit={handleSubmit} style={{ display: "flex"}}>   
         <TextField
          style={{ marginBottom: "15px", marginTop: "15px", marginRight: "10px", marginLeft: "10px", width: "180px", height: 30 }} 
          variant="outlined"
          size="small"
          name="outfit" 
          value={outfitId}             
          onChange={e => setOutfitId(e.target.value)} 
          select
          label="Select Outfit"
        >
        {outfitOptions}   
        </TextField>

        <TextField
          style={{ marginBottom: "15px", marginTop: "15px", marginRight: "10px", marginLeft: "10px", width: "180px", height: 30 }} 
          variant="outlined"
          size="small"
          name="item"                
          value={itemId}                          
          onChange={e => setItemId(e.target.value)}          
          select
          label="Select Item"
        >
         {itemOptions}
        </TextField>
          
            <Button type="submit" variant="outlined" color="secondary" style={{ marginBottom: "15px", marginTop: "20px", marginRight: "10px", marginLeft: "1px", width: "30px", height: 30 }} >Submit</Button>
            {errors ? errors.map(error => <li key={error}>{error}</li>) : null } 
            </form>       
            </Box>
        </Container> 
        </div>
    ) 
}

export default BuildOutfits
