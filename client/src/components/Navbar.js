import React, { useContext } from "react"; 
import {UserContext} from '../context/user' 
import {Link, useHistory} from 'react-router-dom'
import {AppBar, Box, Toolbar, Container, Button} from '@mui/material';

const Navbar = ({updateCurrentUser}) => {
    const {currentUser} = useContext(UserContext);
    const history = useHistory()

    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
        updateCurrentUser(false)
        history.push('/home')
    }

    return (
    <AppBar position="sticky">
      <Container maxWidth="md">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

        {currentUser ? <Button color="secondary">Welcome {currentUser.name}!</Button> : null}  
        <Button color="secondary" to="/" component={Link}>HOME</Button> 
        {currentUser ? <Button color="secondary" to="/items" component={Link}>MY CLOSET</Button> : null}
        {currentUser ? <Button color="secondary" to="/items/new" component={Link}>ADD TO CLOSET</Button> : null}
        {currentUser ? <Button color="secondary" to="/capsules" component={Link}>MY CAPSULES</Button> : null}
        {currentUser ? <Button color="secondary" to="/home" component={Link} onClick={handleLogout}>LOGOUT</Button>: <Button color="secondary" to="/login" component={Link}>LOGIN</Button>}
                
        </Box>    
       </Toolbar>
      </Container>
    </AppBar>
    );
  }
  
  export default Navbar;