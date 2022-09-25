import React, { useContext, useState, useEffect } from "react"; 
import {UserContext} from '../context/user' 
import {useParams, useHistory} from 'react-router-dom'
import { Box, Container, Button, Typography, TextField, Select, MenuItem } from '@mui/material';

const ItemEditForm = ({onEditItem}) => {
    const {currentUser} = useContext(UserContext);
    const [updatedItem, setUpdatedItem] = useState({
        item_name: "",
        brand: "",
        price: "",
        image: "",
        category: "",
        user_id: currentUser.id
    })
    const [errors, setErrors] = useState([])
    const {id} = useParams()
    const history = useHistory()

    useEffect(() => {
        fetch(`/items/${id}`)
        .then(res => {
            if(res.ok) {
                res.json().then(itemObj => setUpdatedItem(itemObj))
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/items/${id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(data => onEditItem(data))
                history.push(`/items`)
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    }

    const handleOnchange = (e) => {
        setUpdatedItem({
            ...updatedItem,
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
          <Typography variant="h5" align="center" style={{ marginBottom: "1em", marginTop: "1em" }}>EDIT CLOSET ITEM</Typography> 
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
                  name="item_name" 
                  onChange={handleOnchange} 
                  value={updatedItem.item_name}             
                  style={{ marginBottom: "15px", width: "300px" }}  
                  variant="outlined"
                  label="Item Name"
                  InputLabelProps={{
                    shrink: true,
                  }}       
                 /> 
            <br/> 
            <TextField 
                  type="brand" 
                  id="outlined-size-small"
                  name="brand" 
                  onChange={handleOnchange} 
                  value={updatedItem.brand}             
                  style={{ marginBottom: "15px", width: "300px" }}  
                  variant="outlined"
                  label="Brand"
                  InputLabelProps={{
                    shrink: true,
                  }}       
                  /> 
            <br/>            
            <TextField                   
                  id="outlined-size-small"
                  name="price" 
                  onChange={handleOnchange} 
                  value={updatedItem.price}             
                  style={{ marginBottom: "15px", width: "300px" }}  
                  variant="outlined"
                  label="Price"
                  InputLabelProps={{
                    shrink: true,
                  }}       
                  /> 
            <br/>     
            <TextField                   
                  id="outlined-size-small"
                  name="image" 
                  onChange={handleOnchange} 
                  value={updatedItem.image}             
                  style={{ marginBottom: "15px", width: "300px" }}  
                  variant="outlined"
                  label="Image URL"
                  InputLabelProps={{
                    shrink: true,
                  }}       
                  /> 
            <br/>          
            
        <Select
          name="category"
          id="category"
          value={updatedItem.category}
          label="Category"              
          onChange={handleOnchange}  
          style={{ marginBottom: "15px", width: "300px" }}    
        >    
          <MenuItem value="Blouses & Tops">TOPS</MenuItem>
          <MenuItem value="Bottoms">BOTTOMS</MenuItem>
          <MenuItem value="Coats">COATS</MenuItem>
          <MenuItem value="Dresses">DRESSES</MenuItem>
          <MenuItem value="Handbags">HANDBAGS</MenuItem>
          <MenuItem value="Shoes">SHOES</MenuItem>         
        </Select>  

            <br/>
            <Button type="submit" variant="outlined" style={{ marginBottom: "15px", width: "300px" }}>Submit</Button>
             {errors ? errors.map(error => <li key={error}>{error}</li>) : null }            
             </form>             
          </Box>
        </Container>   
        </div>
    )

}

export default ItemEditForm