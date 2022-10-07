import { Box, Typography, Container } from '@mui/material';
import HomeShirtCarousel from './HomeShirtCarousel';
import HomeBottomsCarousel from './HomeBottomsCarousel';

const Home = () => {
    const items = ["3 pairs of denim (Jeans, Shorts)", "2 pairs of pants (Tailored Pants, Wide Leg Pants)", "1 Skirt", "5 shirts (Classic solid tees, blouses, tanks)", "3 sweaters (Turtlenecks, Chunky knits, Cashmere)", "3 coats (Trench Coat, Leather Jacket, Denim Jacket)", "2 blazers (Oversized Blazer, Plaid Blazer)", "3 dresses", "5 shoes (Sneakers, Boots, Flats, Sandals, Heels)", "3 handbags (Tote, Handbag)" ]
    
    const checklistItems = items.map((item, index) => <div>
           <Typography key={index} variant="button" align="justify" style={{ margin: "2em"}}> ☐ {item}</Typography>  
    </div>)

    return (
        <div>
        <Box     
        justifyContent="center"
        alignItems="center" 
        display="wrap"          
        style={{ marginBottom: "2em", marginTop: "1.5em" }}> 
          <Typography variant="h3" align="center" style={{ marginBottom: ".3em", marginTop: ".3em" }}> CAPSULE CLOSET </Typography>  
          <Typography variant="body1" align="center" style={{ marginBottom: "1em", marginTop: "1em" }}> Your capsule wardrobe closet organization tool </Typography>        
          <Typography variant="h5" align="center" style={{ marginBottom: ".3em", marginTop: ".3em" }}> 30 PIECES = 100 OTFITS </Typography> 
        </Box>
            <HomeShirtCarousel />
            <HomeBottomsCarousel />   
        
        <Typography variant="h5" align="center" style={{ marginBottom: ".5em", marginTop: "2em" }}>CAPSULE WARDROBE CHECKLIST</Typography>   
            <Container maxWidth="sm">
            <Box justifyContent="center" alignItems="center">      
            {checklistItems}
            <Typography variant="h6" align="center" style={{ marginBottom: "1.5em", marginTop: "1em" }}> BUILD YOUR CAPSULE WARDROBE TODAY </Typography>          
            </Box>
            </Container>        
        </div>
    )
}

export default Home;
