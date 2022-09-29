import { useState } from 'react'
import { useHistory} from 'react-router-dom';
import {Box, Container, Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';

const ItemDetail = ({itemObj, onDeleteItem}) => {
    const {item_name, brand, price, category, image, id} = itemObj
    const [errors, setErrors] = useState(false)
    const history = useHistory()

    const handleBack = () => {
        history.push('/items')
    }

    const handleEditItem = () => {
      history.push(`/items/${id}/edit`)
    }

    const handleDeleteItem = () => {
      fetch(`/items/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if(res.ok) {
          onDeleteItem(id)
          history.push('/items')
        } else {
          res.json().then(data => setErrors(data.errors))
        }
      })
    }

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
            <Button size="small" variant="contained" color="primary" onClick={handleBack}>BACK</Button>
            <Button size="small" variant="contained"  color="primary" onClick={handleEditItem}>EDIT</Button>
            <Button size="small" variant="contained" color="primary" onClick={handleDeleteItem}>DELETE</Button>           
          </CardActions>
        </Card>
        </Box>
        </Container>          
        {errors ? <li key={errors}>{errors}</li>: null}   
      </div>
    );
  }
  
  export default ItemDetail;