import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { SeasonalCategory } from '../../../features/FlowerRedux/FlowerSlice';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Landaue from './Landaue'
const Landaues = () => {
    var settings = {
        arrows: true,
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(SeasonalCategory('landeau'))
    },[dispatch])
    const flowers = useSelector((state) => state.flowers.ocassions);

    return (
        <Row className="container-fluid justify-content-center my-4">
            <h1 className='hometitle my-4'>Shop Landues Bucket For Spacial Person</h1>
            <Slider {...settings}>
                {
                flowers.map(flower => <Landaue key={flower._id} flower={flower}></Landaue>)
                }
            </Slider>
        </Row>
    );
};

export default Landaues;