import ItemList from "./ItemList";
import {Box, Typography} from '@mui/material';

const ItemContainer = ({items, updateItemObj}) => {
    
    return (
      <Box     
      justifyContent="center"
      alignItems="center"   
      display="wrap"        
      style={{ marginBottom: "2em", marginTop: "2em" }}> 
                  
        <div style={{display: 'inline-flex', flexWrap: 'flex', margin: ".5%"}}>  
          <Typography variant="h5" align="center" style={{ marginBottom: "1em", marginTop: "1em" }}> My Closet</Typography> 
          <ItemList items={items} updateItemObj={updateItemObj} />        
      </div>
      </Box>  
    );
  }
  
  export default ItemContainer;