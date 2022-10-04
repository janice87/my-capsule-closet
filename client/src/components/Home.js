import { Box, Typography } from '@mui/material';
import HomeShirtCarousel from './HomeShirtCarousel';
import HomeBottomsCarousel from './HomeBottomsCarousel';

const Home = () => {

    return (
        <div>
        <Box     
        justifyContent="center"
        alignItems="center" 
        display="wrap"          
        style={{ marginBottom: "2em", marginTop: "1.5em" }}> 
          <Typography variant="h3" align="center" style={{ marginBottom: ".3em", marginTop: ".3em" }}> CAPSULE CLOSET </Typography>  
          <Typography variant="subtitle1" align="center" style={{ marginBottom: "1em", marginTop: "1em" }}> Your capsule wardrobe closet organization tool </Typography>        
          <Typography variant="body2" align="center" style={{ marginBottom: "1em", marginTop: "1em" }}> Ever thought about building your own capsule wardrobe? Sign up for Capsule Closet to visualize pieces in your closet and create capsules and outfits.
           </Typography> 
          <Typography variant="h6" align="center" style={{ marginBottom: ".3em", marginTop: ".3em" }}> CAPSULE WARDROBE STARTER STAPLES </Typography> 
           </Box>
                <HomeShirtCarousel />
                <HomeBottomsCarousel />   
            <Typography variant="h6" align="center" style={{ marginBottom: ".3em", marginTop: ".3em" }}> Start building your capsule wardrobe today </Typography>     
        </div>
    )
}

export default Home;