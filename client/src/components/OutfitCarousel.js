import React from 'react';
import Carousel from 'react-material-ui-carousel'
import OutfitCarouselItem from './OutfitCarouselItem';
import { Box } from '@mui/material';

const OutfitCarousel = ({items}) => {
    const carouselItems = items.map(item => <OutfitCarouselItem key={item.id} item={item} />)

    return (
      <div>
          <Box       
          display="flex"   
          flexDirection="row"      
          justifyContent="center"
          alignItems="center"
          >  
        <Carousel autoPlay={false} indicators={false} sx={{ width: 300, marginBottom: "1em", marginTop: "1em", marginRight: "1em", marginLeft: "1em" }}>
          {carouselItems}
        </Carousel>

        <Carousel autoPlay={false} indicators={false} sx={{ width: 300, marginBottom: "1em", marginTop: "1em", marginRight: "1em", marginLeft: "1em" }}>
          {carouselItems}
        </Carousel>

        <Carousel autoPlay={false} indicators={false} sx={{ width: 300, marginBottom: "1em", marginTop: "1em", marginRight: "1em", marginLeft: "1em" }}>
          {carouselItems}
        </Carousel>
        </Box>

        <Box       
          display="flex"   
          flexDirection="row"      
          justifyContent="center"
          alignItems="center"
          >  
        <Carousel autoPlay={false} indicators={false} sx={{ width: 300, marginBottom: "1em", marginTop: "1em", marginRight: "1em", marginLeft: "1em" }}>
          {carouselItems}
        </Carousel>

        <Carousel autoPlay={false} indicators={false} sx={{ width: 300, marginBottom: "1em", marginTop: "1em", marginRight: "1em", marginLeft: "1em" }}>
          {carouselItems}
        </Carousel>

        <Carousel autoPlay={false} indicators={false} sx={{ width: 300, marginBottom: "1em", marginTop: "1em", marginRight: "1em", marginLeft: "1em" }}>
          {carouselItems}         
        </Carousel>
        </Box>
         
      </div>
    )
  }

  export default OutfitCarousel