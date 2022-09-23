import React, { useState} from "react"; 
// import React, { useState, useContext } from "react"; 
// import {UserContext} from '../context/user' 
import { useHistory } from "react-router";
import { Link } from 'react-router-dom'
import { Container, Box, Typography, Grid, TextField, Button} from '@mui/material';

//const LoginForm = () => {
const LoginForm = ({updateCurrentUser, setItems, setCapsules}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState(false)
   // const {setCurrentUser} = useContext(UserContext)
    const history = useHistory()

    const loadItems = () => (
      fetch('/items')
      .then(res => {
        if(res.ok) {
          res.json().then(data => setItems(data))
        } else {
          res.json().then(data => setErrors(data.error))
        }
      })
    )

    const loadCapsules = () => {
      fetch('/capsules')
      .then(res => {
        if(res.ok) {
          res.json().then(data => setCapsules(data))        
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
                    //setCurrentUser(user)
                    history.push('/items')  
                    loadItems()  
                    loadCapsules()                  
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
            justifyContent="right"
            alignItems="right"           
            style={{ marginTop: "3em", marginBottom: "3em" }}
          >      
      <Grid container direction="column" alignItems="right" justify="right">
        <Grid item> 
          <Typography variant="h4" align="center">Capsule Closet Login</Typography> 
        </Grid>
       
        <Grid container direction="column" alignItems="right" justify="right" style={{ marginBottom: "1em", marginTop: "1em" }}>
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
            <Button type="submit" size="large" variant="contained">
              LOGIN
            </Button>   
           </Box>
          </form>   
        {errors ? <li key={errors}>{errors}</li>: null} 
        </Grid>
        </Grid>
        </Grid>  
        <Typography variant="h6" align="center">New User? Sign up</Typography>  
        {/* <Button type="submit" size="large" variant="contained">
              SIGNUP
            </Button>   */}
            <Button to="/signup" component={Link} size="large" variant="contained">SIGNUP</Button> 
        </Box>
        </Container>     
           
      </div>
    );
  }
  
  export default LoginForm;