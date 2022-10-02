import { Box, Typography } from '@mui/material';

const Home = () => {

    return (
        <div>
        <Box     
        justifyContent="center"
        alignItems="center"   
        display="wrap"        
        style={{ marginBottom: "2em", marginTop: "1.5em" }}> 
          <Typography variant="h3" align="center" style={{ marginBottom: ".3em", marginTop: ".3em" }}> Capsule Closet </Typography>  
              
           </Box>
        </div>
    )
}

export default Home;