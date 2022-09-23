//import {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { Box, Container, Typography, Button } from '@mui/material';
import OutfitCard from './OutfitCard';
//import NewOutfitForm from './NewOutfitForm';

const CapsuleDetail = ({capsule}) => {
  //const CapsuleDetail = ({capsule, onAddNewOutfit}) => {
  //const CapsuleDetail = ({capsule, outfits, onAddNewOutfit}) => {

// const CapsuleDetail = ({capsule}) => {
  // const [showForm, setShowForm] = useState(false)
   const {capsule_name, outfits} = capsule
   //const {capsule_name} = capsule

// console.log("capsule object", capsule)
// console.log(capsule.outfits)
// console.log(capsule.outfits.items)
const history = useHistory()

const outfitArray = outfits.map(outfit => 
  <OutfitCard outfit={outfit} key={outfit.id} />
)

const handleBack = () => {
  history.push('/capsules')
}

// const handleShowForm = () => {
//   setShowForm((showForm) => !showForm)
// }
    
    return (
      <div>       
      <Container maxWidth="lg">
        <Box
        m={1}        
        justifyContent="center"
        alignItems="center"
        >       
        
        <Typography variant="h4" align="center">{capsule_name}
        <span><Button size="small" variant="outlined" onClick={handleBack} color="secondary" style={{ marginRight: "1em", marginLeft: "1em" }}>BACK</Button> 
        </span> 
        </Typography> 
        {/* <Button size="small" variant="outlined" onClick={handleShowForm} color="secondary">ADD OUTFIT</Button> */}
   
            {/* {showForm ? <NewOutfitForm capsule={capsule} onAddNewOutfit={onAddNewOutfit} /> : null} 
                    */}
         {outfitArray}
           </Box>
        </Container> 
      </div>
    );
  }
  
  export default CapsuleDetail;