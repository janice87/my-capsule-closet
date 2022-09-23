import { useHistory } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography} from '@mui/material';

const ItemCard = ({item, updateItemObj}) => {
    const {image, id, brand, item_name} = item
    const history = useHistory()

    const handleShowCard = () => {
        updateItemObj(item)
        history.push(`/items/${id}`)
    }

    return (   
    <div>
      <Card sx={{ width: 250 }} style={{ marginBottom: ".5em", marginTop: ".5em", marginRight: ".5em", marginLeft: ".5em" }}>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt="id"
        onClick={handleShowCard}
        style={{height: '300px', width: '250px'}}
      />
      <CardContent>            
        <Typography variant="overline">
        {brand} {item_name}
        </Typography>
      </CardContent>     
      </Card>      
      </div>    
    );
  }
  
  export default ItemCard;

