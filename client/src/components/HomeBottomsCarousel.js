import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import IconButton from '@mui/material/IconButton'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeBottomsCarousel = () => {

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

const bottoms = ["https://static.zara.net/photos///2022/I/0/1/p/6164/172/427/2/w/1024/6164172427_6_1_1.jpg?ts=1658216926001", "https://static.zara.net/photos///2022/V/0/1/p/7385/495/712/2/w/1024/7385495712_6_1_1.jpg?ts=1646905492480", "https://lp.stories.com/app005prod?set=key[resolve.pixelRatio],value[1]&set=key[resolve.width],value[350]&set=key[resolve.height],value[10000]&set=key[resolve.imageFit],value[containerwidth]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[webp]&set=key[resolve.quality],value[80]&set=ImageVersion[1],origin[dam],source[%2Fa4%2Fcb%2Fa4cb45f5085ec90a83bdedd6c8cbda01d14b3905.jpg],type[DESCRIPTIVESTILLLIFE]&call=url[file%3A%2Fproduct%2Fdynamic.chain", "https://static.zara.net/photos///2022/I/0/1/p/2569/030/427/2/w/1024/2569030427_6_1_1.jpg?ts=1658832852332", "https://i.s-madewell.com/is/image/madewell/NF034_DM5531_ld?wid=830&hei=1054&fmt=jpeg&fit=crop&qlt=75,1&resMode=bisharp&op_usm=0.5,1,5,0", "https://static.zara.net/photos///2022/I/0/1/p/1608/991/800/2/w/351/1608991800_6_1_1.jpg?ts=1661505708838"]

const bottomsList = bottoms.map((bottom, index) =>
  <div key={index} className="bottoms">
       <img src={bottom} alt="pants"/>
  </div> )

  return (  
       <div className="App">
        <Slider {...settings}>     
         {bottomsList}
        </Slider>
        </div>
  )
}

export default HomeBottomsCarousel
