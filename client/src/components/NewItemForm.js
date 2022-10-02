import React, { useContext, useState } from "react"; 
import {UserContext} from '../context/user' 
import { useHistory } from "react-router-dom";
import { Box, Container, Button, Typography, TextField, Select, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const NewItemsForm = ({onAddItem}) => {
    const {currentUser} = useContext(UserContext);
    const [formData, setFormData] = useState({
        item_name: "",
        brand: "",
        price: "",
        image: "",
        category: "",
        user_id: currentUser.id
    })
    const [errors, setErrors] = useState([])
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({...formData})
        })
        .then(res => {
            if(res.ok) {
                res.json().then(newItem => onAddItem(newItem))
                history.push('/items')
            } else {
                res.json().then(data => {
                    //console.log(data)
                    setErrors(data.errors)
                })
            }
        })
    }

    const handleOnchange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleBack = () => {
      history.push(`/items`)
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
           <IconButton size="small" onClick={handleBack} color="secondary" style={{ marginLeft: ".05em" }}>             
            <KeyboardBackspaceOutlinedIcon fontSize="small" />
            </IconButton> 
          <Typography variant="h5" align="center" style={{ marginBottom: "1em", marginTop: "1em" }}>ADD ITEM TO CLOSET </Typography> 
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
                  value={formData.item_name}             
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
                  value={formData.brand}             
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
                  value={formData.price}             
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
                  value={formData.image}             
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
          value={formData.category}
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
            <Button type="submit" variant="contained" color="primary" style={{ marginBottom: "15px", width: "300px" }} >Submit</Button>
             
            <Typography variant="button">  
             {errors ? errors.map(error => <li key={error}>{error}</li>) : null } 
             </Typography>            
                              
            </form>           
          </Box>
        </Container> 
        </div>
    );
  }
  
  export default NewItemsForm;