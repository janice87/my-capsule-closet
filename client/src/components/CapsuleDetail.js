// import {useEffect, useState} from 'react'
import {Typography} from '@mui/material';
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
        <Typography variant="h6">
           {capsule_name}
           </Typography>         
           
           {outfitArray}
      </div>
    );
  }
  
  export default CapsuleDetail;