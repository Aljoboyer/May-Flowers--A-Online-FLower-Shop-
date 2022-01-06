import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GetFlowers } from '../../../features/FlowerRedux/FlowerSlice';
import Flower from './Flower';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Flowers = () => {
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
        dispatch(GetFlowers())
    },[dispatch])
    const allflower = useSelector((state) => state.flowers.allflowers);
    const flowers = allflower.slice(0,6)
    console.log(allflower)
    return (
        <Row className="container-fluid justify-content-center my-4">
            <Slider {...settings}>
                {
                flowers.map(flower => <Flower key={flower._id} flower={flower}></Flower>)
                }
            </Slider>
        </Row>
    );
};

export default Flowers;