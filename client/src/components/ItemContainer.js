import {useState} from 'react'
import { Box, Button, Typography} from '@mui/material';
import ItemList from "./ItemList";
import BuildOutfits from "./BuildOutfits";
import NewOutfitForm from './NewOutfitForm';
import Search from './Search'

const ItemContainer = ({items, capsules, outfits, updateItemObj, onAddOutfitItem, onAddNewOutfit}) => {
  const [showForm, setShowForm] = useState(false)
  const [showOutfitForm, setShowOutfitForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterBy, setFilterBy] = useState("All")

  const handleShowForm = () => {
    setShowForm((showForm) => !showForm)
  }

  const handleShowOutfitForm = () => {
    setShowOutfitForm((showOutfitForm) => !showOutfitForm)
  }

  const handleSearchTerm = (search) => {
    setSearchTerm(search)
  }

  const onHandleFilter = (filterCategory) => {
    setFilterBy(filterCategory)
  }

  const searchedItems = items.filter(item => item.brand.toLowerCase().includes(searchTerm.toLowerCase()))

  const filteredItems = searchedItems.filter(item => {
    if(filterBy === "All") {
      return true
    } else {
      return filterBy === item.category
    }
  })
    
    return (
      <div>
      <Box     
      justifyContent="center"
      alignItems="center"   
      display="wrap"        
      style={{ marginBottom: "2em", marginTop: "1em" }}> 
          <Typography variant="h4" align="center" style={{ marginBottom: ".3em", marginTop: ".3em" }}> MY CLOSET </Typography>  
          <Search searchTerm={searchTerm} onHandleSearchTerm={handleSearchTerm} filterBy={filterBy} onHandleFilter={onHandleFilter} />

          <Box m={1} display="flex" justifyContent="center" alignItems="center">
           <Button size="medium" variant="contained" onClick={handleShowOutfitForm} color="primary" style={{ marginRight: ".5em", marginLeft: ".5em" }}>ADD OUTFIT</Button>   
           <Button size="medium" variant="contained" onClick={handleShowForm} color="primary" style={{ marginRight: ".5em", marginLeft: ".5em" }}>BUILD OUTFIT</Button>            
          </Box>
           {showOutfitForm ? <NewOutfitForm onAddNewOutfit={onAddNewOutfit} capsules={capsules} /> : null} 
           {showForm ? <BuildOutfits onAddOutfitItem={onAddOutfitItem} outfits={outfits} items={items} /> : null}    
          <ItemList items={filteredItems} updateItemObj={updateItemObj} /> 
          </Box> 
      </div>
    );
  }
  
  export default ItemContainer;
