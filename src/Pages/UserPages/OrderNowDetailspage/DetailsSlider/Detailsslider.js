import React from 'react';
import { Row } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Anniversaryqutes from '../../Ocassion/Anniversary/Anniversaryqutes';
import Birthdayqutes from '../../Ocassion/Birthday/Birthdayqutes';
import Valentinesqutes from '../../Ocassion/Valentines/Valentinesqutes';
import Weddingqutes from '../../Ocassion/Wedding/Weddingqutes';

const Detailsslider = () => {
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
      };

    return (
        <Row className="justify-content-center my-4">
        <Slider {...settings}>
            <div>
                <Anniversaryqutes></Anniversaryqutes>
            </div>
            <div>
                <Birthdayqutes></Birthdayqutes>
            </div>
            <div>
                <Valentinesqutes></Valentinesqutes>
            </div>
            <div>
                <Weddingqutes></Weddingqutes>
            </div>
        </Slider>
        </Row>
    );
}

export default Detailsslider