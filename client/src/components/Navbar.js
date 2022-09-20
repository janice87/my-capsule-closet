import {Link} from 'react-router-dom'
import {AppBar, Box, Toolbar, Container, Button} from '@mui/material';

const Navbar = () => {
 
    return (
    <AppBar position="sticky">
      <Container maxWidth="md">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Button color="secondary" to="/login" component={Link}>LOGIN</Button>   
        <Button color="secondary" to="/" component={Link}>HOME</Button> 
        <Button color="secondary" to="/items" component={Link}>MY CLOSET</Button> 
        <Button color="secondary" to="/items/new" component={Link}>ADD TO CLOSET</Button> 
        <Button color="secondary" to="/capsules" component={Link}>MY CAPSULES</Button> 
        {/* <Button color="secondary" to="/capsules/new" component={Link}>BUILD CAPSULES</Button>  */}
            {/* {currentUser ? <Button color="secondary">Welcome {currentUser.name}!</Button> : null}            
            <Button color="secondary" to="/" component={Link}>HOME</Button> 
            <Button color="secondary" to="/rentals" component={Link}>RENTALS</Button>           
            {currentUser ? <Button color="secondary" to={'/rentals/new'} component={Link}>ADD RENTALS</Button> : null}
            {currentUser ? <Button color="secondary" to={`/users/${currentUser.id}`} component={Link}>MY RENTALS</Button> : null}                    
            {currentUser ? <Button color="secondary" to="/logout" onClick={handleLogout}>LOGOUT</Button> : <Button color="secondary" to="/login" component={Link}>LOGIN </Button>}  */}
        </Box>    
       </Toolbar>
      </Container>
    </AppBar>
    );
  }
  
  export default Navbar;