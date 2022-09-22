import ItemCard from './ItemCard'
import {Grid} from '@mui/material';

const ItemList = ({items, updateItemObj}) => {
    const itemsArray = items.map((item, index) => 
        <Grid item lg={4} key={index}>
            <ItemCard item={item} key={item.id} updateItemObj={updateItemObj} />
        </Grid>
        )

    return (
      <div>
        {itemsArray}   
      </div>      
      );
  }
  
  export default ItemList;