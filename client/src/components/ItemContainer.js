import {useState} from 'react'
import { Box, Button, Typography} from '@mui/material';
import ItemList from "./ItemList";
import BuildOutfits from "./BuildOutfits";
import NewOutfitForm from './NewOutfitForm';

const ItemContainer = ({items, capsules, outfits, updateItemObj, onAddOutfitItem, onAddNewOutfit}) => {
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
      <Box     
      justifyContent="center"
      alignItems="center"   
      display="wrap"        
      style={{ marginBottom: "2em", marginTop: "1em" }}> 
          <Typography variant="h4" align="center" style={{ marginBottom: ".3em", marginTop: ".3em" }}> MY CLOSET </Typography>  

          <Box m={1} display="flex" justifyContent="center" alignItems="center">
           <Button size="medium" variant="contained" onClick={handleShowOutfitForm} color="primary" style={{ marginRight: ".5em", marginLeft: ".5em" }}>ADD OUTFIT</Button>   
           <Button size="medium" variant="contained" onClick={handleShowForm} color="primary" style={{ marginRight: ".5em", marginLeft: ".5em" }}>BUILD OUTFIT</Button>            
          </Box>
           {showOutfitForm ? <NewOutfitForm onAddNewOutfit={onAddNewOutfit} capsules={capsules} /> : null} 
           {showForm ? <BuildOutfits onAddOutfitItem={onAddOutfitItem} outfits={outfits} items={items} /> : null}    
          <ItemList items={items} updateItemObj={updateItemObj} /> 
          </Box> 
      </div>
    );
  }
  
  export default ItemContainer;
