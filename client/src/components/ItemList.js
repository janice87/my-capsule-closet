import ItemCard from './ItemCard'
import {Container, Grid} from '@mui/material';

const ItemList = ({items, updateItemObj}) => {
    const itemsArray = items.map((item, index) => 
        <Grid item lg={3} key={index}>
            <ItemCard item={item} key={item.id} updateItemObj={updateItemObj} />
        </Grid>
        )

    return (
      <div>
        <Container> 
          <Grid container      
          spacing={1}>      
          {itemsArray} 
          </Grid>
        </Container> 
      </div>      
      );
  }
  
  export default ItemList;