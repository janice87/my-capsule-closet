import {useState} from 'react'
import { Box, Typography, Button} from '@mui/material';
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
      style={{ marginBottom: "2em", marginTop: "2em" }}> 
          <Typography variant="h5" align="center" style={{ marginBottom: "1em", marginTop: "1em" }}> My Closet </Typography>  

           <Button size="small" variant="outlined" onClick={handleShowOutfitForm} color="secondary">ADD OUTFIT</Button>         
          {showOutfitForm ? <NewOutfitForm onAddNewOutfit={onAddNewOutfit} capsules={capsules} /> : null} 

          <Button size="small" variant="outlined" onClick={handleShowForm} color="secondary">BUILD OUTFIT</Button>
          {showForm ? <BuildOutfits onAddOutfitItem={onAddOutfitItem} outfits={outfits} items={items} /> : null} 
      </Box>        
     
      {/* <div style={{display: 'inline-flex', flexDirecton: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', margin: ".5%"}}> */}
        {/* <div style={{display: 'inline-flex', flexWrap: 'wrap', margin: ".5%"}}>   */}
          <ItemList items={items} updateItemObj={updateItemObj} />  
        {/* </div> */}
    
      </div>
    );
  }
  
  export default ItemContainer;
