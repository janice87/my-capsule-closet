import {useState} from 'react'
import BuildOutfits from "./BuildOutfits";
import NewOutfitForm from './NewOutfitForm';
import OutfitCarousel from './OutfitCarousel'
import {Box, Button} from '@mui/material';

// PASS INTO APP
const BuildOutfitsPage = ({items, capsules, outfits, onAddOutfitItem, onAddNewOutfit}) => {
  const [showForm, setShowForm] = useState(false)
  const [showOutfitForm, setShowOutfitForm] = useState(false)

  const handleShowForm = () => {
    setShowForm((showForm) => !showForm)
  }

  const handleShowOutfitForm = () => {
    setShowOutfitForm((showOutfitForm) => !showOutfitForm)
  }

  return (
    <div>  
         <Box m={1} display="flex" justifyContent="center" alignItems="center" style={{ marginBottom: "1em", marginTop: "1em" }}> 
           <Button size="medium" variant="contained" onClick={handleShowOutfitForm} color="primary" style={{ marginRight: ".5em", marginLeft: ".5em", marginTop: "1em" }}>ADD OUTFIT</Button>   
           <Button size="medium" variant="contained" onClick={handleShowForm} color="primary" style={{ marginRight: ".5em", marginLeft: ".5em", marginTop: "1em" }}>BUILD OUTFIT</Button>            
          </Box>
           {showOutfitForm ? <NewOutfitForm onAddNewOutfit={onAddNewOutfit} capsules={capsules} /> : null} 
           {showForm ? <BuildOutfits onAddOutfitItem={onAddOutfitItem} outfits={outfits} items={items} /> : null}             
        <Box
          justifyContent="center"
          alignItems="center"   
          display="wrap"        
          style={{ marginBottom: "1em", marginTop: ".5em" }}>  
            <OutfitCarousel items={items} />
        </Box> 
    </div>
  )
}

export default BuildOutfitsPage