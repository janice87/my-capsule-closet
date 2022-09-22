import ItemList from "./ItemList";
import {Box, Typography} from '@mui/material';

const ItemContainer = ({items, updateItemObj}) => {
    
    return (
      <div>
      <Box     
      justifyContent="center"
      alignItems="center"   
      display="wrap"        
      style={{ marginBottom: "2em", marginTop: "2em" }}> 
          <Typography variant="h5" align="center" style={{ marginBottom: "1em", marginTop: "1em" }}> My Closet</Typography> 
          </Box>         
  
      <div style={{display: 'flex', flexDirecton: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', margin: ".5%"}}>
        {/* <div style={{display: 'inline-flex', flexWrap: 'wrap', margin: ".5%"}}>   */}
      
          <ItemList items={items} updateItemObj={updateItemObj} />     
        
      </div>
      </div>    
     
    );
  }
  
  export default ItemContainer;

      // {/* <Box     
      // justifyContent="center"
      // alignItems="center"   
      // display="flex"        
      // style={{ marginBottom: "2em", marginTop: "2em" }}>  */}

      //   {/* </div> */}
      // {/* </Box>   */}