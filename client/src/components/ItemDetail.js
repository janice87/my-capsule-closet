import { useHistory } from 'react-router-dom';
import {Box, Container, Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';

const ItemDetail = ({itemObj}) => {
    const {item_name, brand, price, category, image} = itemObj
    const history = useHistory()

    const handleBack = () => {
        history.push('/items')
    }

    // const handleEditItem = () => {

    // }

    return (
      <div>   
        <Container maxWidth="xs">
          <Box     
            justifyContent="center"
            alignItems="center"
            boxShadow={1}
            style={{ marginBottom: "2em", marginTop: "2em" }}
          >  
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="500"
            image={image}
            alt="id"
          />
          <CardContent>
            <Typography variant="h6">
            {brand} {item_name}
            </Typography>
                              
            <Typography variant="subtitle1">
            Price: ${price} 
            </Typography>
                   
            <Typography variant="body1">
            Category: {category}
            </Typography>
          </CardContent>

          <CardActions>      
            <Button size="small" variant="outlined" onClick={handleBack} color="secondary">BACK</Button>
            {/* <Button size="small" variant="outlined" onClick={handleEditItem}>EDIT</Button> */}
           
          </CardActions>
        </Card>
        </Box>
        </Container>          
             
      </div>
    );
  }
  
  export default ItemDetail;