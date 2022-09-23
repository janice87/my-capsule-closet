//import {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import OutfitCard from './OutfitCard';
//import NewOutfitForm from './NewOutfitForm';

const CapsuleDetail = ({capsule}) => {
  const {capsule_name, outfits} = capsule
  const history = useHistory()

const outfitArray = outfits.map(outfit => 
  <OutfitCard outfit={outfit} key={outfit.id} />
)

const handleBack = () => {
  history.push('/capsules')
}
   
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
      </div>
    );
  }
  
  export default CapsuleDetail;