import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Row , Card} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GetMoments } from '../../../features/FlowerRedux/FlowerSlice';

const Displaymoments = () => {
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
          dispatch(GetMoments())
      },[dispatch])
      const moments = useSelector((state) => state.flowers.moments);
      console.log('moments',moments)
    return (
        <Row className='container-fluid my-4'>
            <h2 className='hometitle my-4'>Our Happy Customer Moments</h2>
                 <Slider {...settings}>
                {
                moments.map(moment => 
                    <Card style={{ width: '20rem' }}>
                    <Card.Img className='momentsimg' variant="top" src={`data:image/jpeg;base64,${moment.img}`} /> 
                     <Card.Body>
                  <Card.Text className='fw-bold'>
                        {moment.flowerprice}
                  </Card.Text>
                    </Card.Body>
                <Card.Footer className='text-muted'>
                <i className="fas fa-user-alt fa-2x mx-2"></i>{moment.username}
                </Card.Footer>
                    </Card>
                    )
                }
            </Slider>
        </Row>
    );
};

export default Displaymoments;