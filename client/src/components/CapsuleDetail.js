// import {useEffect, useState} from 'react'
import { Box, Container, Typography } from '@mui/material';
import OutfitCard from './OutfitCard';

const CapsuleDetail = ({capsule}) => {

 const {capsule_name, outfits} = capsule
// console.log("capsule object", capsule)
// console.log(capsule.outfits)
// console.log(capsule.outfits.items)

const outfitArray = outfits.map(outfit => 
  <OutfitCard outfit={outfit} key={outfit.id} />
)
    
    return (
      <div>       
      <Container maxWidth="lg">
        <Box
        m={1}        
        justifyContent="center"
        alignItems="center"
        >
       
        <Typography variant="h4" align="center">{capsule_name}</Typography>  
            
         {outfitArray}
           </Box>
        </Container> 
      </div>
    );
  }
  
  export default CapsuleDetail;