import React, { useState } from "react"; 

// import React, { useState, useContext } from "react"; 
// import {UserContext} from '../context/user'  
import { useHistory } from "react-router";
import { Link } from 'react-router-dom'
import { Container, Box, Typography, Grid, TextField, Button} from '@mui/material';

const LoginForm = ({updateCurrentUser, setItems, setCapsules, setOutfits, setOutfitItems}) => {
 // const LoginForm = ({updateCurrentUser}) => {

  //nothing loads with context and /me with [setcurrentuser]
    // const LoginForm = () => {
    // const {setCurrentUser} = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState(false)
    const history = useHistory()


    const loadFetch = () => {
      fetch('/items')
      .then(res => {
        if(res.ok) {
          res.json().then(data => setItems(data))
        } else {
          res.json().then(data => setErrors(data.error))
        }
      })

      fetch('/capsules')
      .then(res => {
        if(res.ok) {
          res.json().then(data => setCapsules(data))        
        } else {
          res.json().then(data => setErrors(data.error))
        }
      })

      fetch('/outfits')
      .then(res => {
        if(res.ok) {
          res.json().then(data => setOutfits(data))
        } else {
          res.json().then(data => setErrors(data.error))
        }
      })

      fetch('/outfit_items')
      .then(res => {
        if(res.ok) {
          res.json().then(data => {
            console.log(data, "outfit items from login")
            setOutfitItems(data)
          })
        } else {
          res.json().then(data => setErrors(data.error))
        }
      })

    }
  
   const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => {
            if (res.ok) {
                res.json().then(currentUser => {                     
                    updateCurrentUser(currentUser)               
                    history.push('/items')                       
                    loadFetch()         
                })
            } else {
                res.json().then(data => setErrors(data.error))
            }
        })
    }

    return (
      <div>  
        <Container maxWidth="xs">
         <Box     
            justifyContent="center"
            alignItems="center"           
            style={{ marginTop: "3em", marginBottom: "3em" }}
          >      
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item> 
          <Typography variant="h4" align="center">Capsule Closet Login</Typography> 
        </Grid>
       
        <Grid container direction="column" alignItems="center" justify="center" style={{ marginBottom: "1em", marginTop: "1em" }}>
        <Grid item style={{ border: "0.2px solid gray", paddingLeft: "10px", paddingRight: "10px" }}>              
          <form onSubmit={handleSubmit}> 
            <TextField
              variant="outlined"
              label="Email"
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              fullWidth
              style={{ marginBottom: "5px", marginTop: "5px", padding: "5px" }}
            />
            <TextField
              type="password"
              variant="outlined"
              label="Password"
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
              fullWidth
              style={{ marginBottom: "5px", marginTop: "5px", padding: "5px" }}
            />
            <Box m={1} display="flex" justifyContent="center" alignItems="center">
            <Button type="submit" size="medium" variant="contained">
              LOGIN
            </Button>   
           </Box>
          </form>   
        {errors ? <li key={errors}>{errors}</li>: null} 
        </Grid>
        </Grid>
        </Grid>  
          <Box m={1}  display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h6" align="center" style={{padding: "5px" }}>New User?</Typography>  
          <br />
          <Button to="/signup" component={Link} size="small" variant="contained">SIGNUP</Button> 
          </Box>
        </Box>
        </Container>    
       </div>
    );
  }
  
  export default LoginForm;