//import {useEffect, useState} from 'react'

import { useState} from 'react'
import { useHistory } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import OutfitCard from './OutfitCard';

// this adds new outfit and shows up in capsule detail
 const CapsuleDetail = ({capsule, outfits, outfitItems, onDeleteOutfit, onUpdateOutfitObj}) => {
//const CapsuleDetail = ({capsule, outfitItems, onDeleteOutfit}) => {
//const CapsuleDetail = ({capsule}) => {
 // const [outfitsArray, setOutfitsArray] = useState([])
  const [errors, setErrors] = useState(false)
  const {capsule_name, id} = capsule
  
  // const {capsule_name, id, outfits} = capsule
  const history = useHistory()

  // console.log(capsule, "capsule detail")
  // console.log(outfits, "outfits capsule detail")
  // console.log(outfitItems, "outfit items capsule detail")
 
 
  const handleBack = () => {
    history.push('/capsules')
  }  

const outfitsFiltered = outfits.filter(outfit => outfit.capsule_id === id)  

const outfitArray = outfitsFiltered.map(outfit => 
  <OutfitCard outfit={outfit} key={outfit.id} outfitItems={outfitItems} onDeleteOutfit={onDeleteOutfit} onUpdateOutfitObj={onUpdateOutfitObj} />
)

    return (
      <div>       
      <Container maxWidth="lg">
        <Box
        m={1}        
        justifyContent="center"
        alignItems="center"
        >       
        <Typography variant="h4" align="center" style={{ marginBottom: "1em", marginTop: "1em" }}>{capsule_name}
        <span><Button size="small" variant="outlined" onClick={handleBack} color="secondary" style={{ marginRight: "1em", marginLeft: "1em" }}>BACK</Button> 
        </span> 
        </Typography>       
         {outfitArray}
           </Box>
        </Container> 
        {errors ? <h2>{setErrors}</h2> : null} 
      </div>
    );
  }
                            
  export default CapsuleDetail;