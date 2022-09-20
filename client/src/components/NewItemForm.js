import {useState} from 'react'
import { useHistory } from "react-router-dom";
import { Box, Container, Button, Typography, TextField, Select, MenuItem } from '@mui/material';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const NewItemsForm = ({onAddItem}) => {
    const [formData, setFormData] = useState({
        item_name: "",
        brand: "",
        price: "",
        image: "",
        category: "",
        user_id: 1
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
            body: JSON.stringify({formData})
        })
        .then(res => {
            if(res.ok) {
                res.json().then(newItem => {
                    console.log(newItem)
                    onAddItem(newItem)
                })
                history.push('/items')
            } else {
                res.json().then(data => {
                    console.log(data)
                    setErrors(data.errors)
                })
            }
        })
    }

    const handleOnchange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setFormData({
            ...formData,
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
          <Typography variant="h5" align="center" style={{ marginBottom: "1em", marginTop: "1em" }}>Add an item to your closet <CheckroomIcon fontSize="medium" /> </Typography> 
          <br /> 
        </Box>
        </Container>  

        <Container maxWidth="m">
          <Box       
          display="flex"
          justifyContent="center"
          alignItems="center"
          >          
            {/* <FormControl onSubmit={handleSubmit} sx={{ m: 1, minWidth: 120 }}> */}
            <form onSubmit={handleSubmit}>
            {/* <form onSubmit={handleSubmit} sx={{ m: 1, minWidth: 120 }}> */}
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
                  label="Image"
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
        >    
          <MenuItem value="Blouses & Tops">BLOUSES & TOPS</MenuItem>
          <MenuItem value="Bottoms">BOTTOMS</MenuItem>
          <MenuItem value="Coats">COATS</MenuItem>
          <MenuItem value="Dresses">DRESSES</MenuItem>
          <MenuItem value="Handbags">HANDBAGS</MenuItem>
          <MenuItem value="Shoes">SHOES</MenuItem>         
        </Select>  

            <br/>
            <Button type="submit" variant="outlined">Submit</Button>
             {errors ? errors.map(error => <li key={error}>{error}</li>) : null }            
            {/* </FormControl>   */}
            </form>  
           
          </Box>
        </Container>   

        </div>
    );
  }
  
  export default NewItemsForm;