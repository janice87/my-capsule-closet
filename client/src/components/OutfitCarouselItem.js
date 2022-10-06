import React from 'react'
import {Card, CardMedia, CardContent, Typography} from '@mui/material';

const OutfitCarouselItem = ({item}) => {
  return (
    <div> 

      <Card sx={{ width: 250 }} style={{ marginBottom: "1em", marginTop: "1em", marginRight: "1em", marginLeft: "1em" }}>
      <CardMedia
        component="img"
        height="200"
        image={item.image}
        alt="id"       
        style={{height: '300px', width: '250px'}}
      />
      <CardContent>            
        <Typography variant="overline">
        {item.brand} {item.item_name}
        </Typography>
      </CardContent>     
      </Card>    
           
    </div>
  )
}

export default OutfitCarouselItem