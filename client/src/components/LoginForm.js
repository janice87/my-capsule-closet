import {useState} from 'react'
import { useHistory } from "react-router";
import { Container, Box, Typography, Grid, TextField, Button} from '@mui/material';

const LoginForm = ({updateCurrentUser}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState(false)
    const history = useHistory()

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
                })
            } else {
                res.json().then(data => setErrors(data.error)
                )
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
        <Button type="submit" size="large" variant="contained">
              SIGNUP
            </Button>  
        </Box>
        </Container>     
           
      </div>
    );
  }
  
  export default LoginForm;