import { useState } from 'react'
import { useHistory } from "react-router";
import { Container, Box, Typography, Grid, TextField, Button} from '@mui/material';

const SignupForm = ({updateCurrentUser}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])
    const history = useHistory()
  
    
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation
        })
    })
        .then(res => {
            if(res.ok) {
                res.json().then(newUser => {
                    updateCurrentUser(newUser)
                    history.push('/items')
                })
            } else {
                res.json().then(data => {
                    console.log(data)
                    setErrors(data.errors)
                })
            }
        })
    }

    return (
        <div>  
            <Container maxWidth="xs">
            <Box     
            justifyContent="center"
            alignItems="center"           
            style={{marginTop: "2em", marginBottom: "3em"}}
            >       
      <Grid container direction="column" alignItems="center" justify="center" spacing={6}>
        <Grid item> 
          <Typography variant="h4" align="center">Capsule Closet</Typography>      
          <Typography variant="h6" align="center">Sign up today</Typography> 
        </Grid>
        
        <Grid container direction="column" alignItems="center" justify="center">
        <Grid item style={{ border: "0.2px solid gray", paddingLeft: "10px", paddingRight: "10px" }}>
          <form onSubmit={handleSubmit}> 
          <TextField
            variant="outlined"
            label="Name"
            onChange={(e) => setName(e.target.value)} 
            value={name}
            fullWidth
            style={{ marginBottom: "5px", marginTop: "5px", padding: "5px" }}
          />
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
          <TextField
            type="password"
            variant="outlined"
            label="Confirm Password"
            onChange={(e) => setPasswordConfirmation(e.target.value)} 
            value={passwordConfirmation}
            fullWidth
            style={{ marginBottom: "5px", marginTop: "5px", padding: "5px" }}
          />          
         
            <Box m={1} display="flex" justifyContent="center" alignItems="center">
            <Button type="submit" size="medium" variant="contained">
              SIGN UP
            </Button>            
            </Box>
          </form>          
        {errors ? errors.map(error => <li key={error}>{error}</li>) : null }
        </Grid>
        </Grid>
        </Grid>  
        </Box>
        </Container>
        </div>
   );
 }
 
 export default SignupForm;