import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import IconButton from '@mui/material/IconButton'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeShirtCarousel = () => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
     return (
      <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}>    
      <IconButton color="secondary">
        <KeyboardArrowRightIcon fontSize="medium" />
      </IconButton> 
      </div>  
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
      <IconButton color="secondary">
        <KeyboardArrowLeftIcon fontSize="medium" />
      </IconButton> 
        </div>
      
    );
  }
  
const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 5000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


const shirts = ["https://lp.stories.com/app005prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[350]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[webp]&set=key[resolve.quality],value[80]&set=ImageVersion[2],origin[dam],source[%2F44%2F50%2F44504cf79531769ef1ecd12ee102d4d72751f31e.jpg],type[DESCRIPTIVESTILLLIFE]&call=url[file%3A%2Fproduct%2Fdynamic.chain]", "https://lp.stories.com/app005prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[350]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[webp]&set=key[resolve.quality],value[80]&set=ImageVersion[3],origin[dam],source[%2F3e%2Fb3%2F3eb3796b4328d905c94743de2b779bea5f9566b4.jpg],type[DESCRIPTIVESTILLLIFE]&call=url[file%3A%2Fproduct%2Fdynamic.chain]", "https://lp.stories.com/app005prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[350]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[webp]&set=key[resolve.quality],value[80]&set=ImageVersion[1],origin[dam],source[%2F83%2Fa5%2F83a54dac5760c505dc3d42af9f06fd504b533bcd.jpg],type[DESCRIPTIVESTILLLIFE]&call=url[file%3A%2Fproduct%2Fdynamic.chain]", "https://lp.stories.com/app005prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[350]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[webp]&set=key[resolve.quality],value[80]&set=ImageVersion[1],origin[dam],source[%2Fc9%2Fb3%2Fc9b345c35873790f581fedfd305d0738da834be2.jpg],type[DESCRIPTIVESTILLLIFE]&call=url[file%3A%2Fproduct%2Fdynamic.chain]", "https://lp.stories.com/app005prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[350]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[webp]&set=key[resolve.quality],value[80]&set=ImageVersion[2],origin[dam],source[%2F01%2F49%2F01494c6f2553fcf6a27f308af2c387c4705d8cb8.jpg],type[DESCRIPTIVESTILLLIFE]&call=url[file%3A%2Fproduct%2Fdynamic.chain]", "https://lp.stories.com/app005prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[350]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[webp]&set=key[resolve.quality],value[80]&set=ImageVersion[3],origin[dam],source[%2Fbf%2F27%2Fbf27352ab90db2e1c91a117c0f41b352e656dbb5.jpg],type[DESCRIPTIVESTILLLIFE]&call=url[file%3A%2Fproduct%2Fdynamic.chain]"]

const shirtsList = shirts.map((shirt, index) =>
  <div key={index} className="card">
       <img src={shirt} alt="shirt"/>
  </div> )

  return (  
       <div className="App">
        <Slider {...settings}>     
         {shirtsList}
        </Slider>
        </div>
  )
}

export default HomeShirtCarousel
