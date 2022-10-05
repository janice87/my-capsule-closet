import {useState} from 'react'
import { Box, Typography} from '@mui/material';
import ItemList from "./ItemList";
import Search from './Search'


const ItemContainer = ({items, updateItemObj,}) => {

  const [searchTerm, setSearchTerm] = useState("")
  const [filterBy, setFilterBy] = useState("All")

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
          <ItemList items={filteredItems} updateItemObj={updateItemObj} /> 
          </Box> 
      </div>
    );
  }
  
  export default ItemContainer;
