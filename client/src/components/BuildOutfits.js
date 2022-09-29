import {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { Box, Container, MenuItem, Button, TextField } from '@mui/material';

const BuildOutfits = ({onAddOutfitItem, outfits, items}) => {
    const [outfitItem, setOutfitItem] = useState({
        outfit_id: "",
        item_id: ""
    })
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
            body: JSON.stringify(outfitItem)
        }) 
        .then(res => {
            if(res.ok) {
                res.json().then(data => {
                    console.log(data, "outfit item from build outfits")
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
   
    const handleOnchange = (e) => {       
        setOutfitItem({...outfitItem, 
            [e.target.name]: e.target.value
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
          name="outfit_id" 
          value={outfitItem.outfit_id}             
          onChange={handleOnchange} 
          select
          label="Select Outfit"
        >
        {outfitOptions}   
        </TextField>
      
        <TextField
          style={{ marginBottom: "15px", marginTop: "15px", marginRight: "10px", marginLeft: "10px", width: "180px", height: 30 }} 
          variant="outlined"
          size="small"
          name="item_id"                
          value={outfitItem.item_id}                          
          onChange={handleOnchange}          
          select
          label="Select Item"
        >
         {itemOptions}
        </TextField>
          
            <Button type="submit" variant="contained" color="primary" style={{ marginBottom: "15px", marginTop: "20px", marginRight: "10px", marginLeft: "1px", width: "30px", height: 30 }} >Submit</Button>
            {errors ? errors.map(error => <li key={error}>{error}</li>) : null } 
            </form>       
            </Box>
        </Container> 
        </div>
    ) 
}

export default BuildOutfits
