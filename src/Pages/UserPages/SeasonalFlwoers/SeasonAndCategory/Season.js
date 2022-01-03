import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Season = ({flower}) => {
    const {_id,img, flowername, short, flowerprice} = flower
    return (
        <Col lg={4} md={6} sm={12}>
        <Card>
        <Card.Img variant="top" src={`data:image/jpeg;base64,${img}`} />
         <Card.Body>
      <Card.Title className='regtext fs-4 fw-bold'>{flowername}</Card.Title>
      <Card.Text>
        <p><b>$ {flowerprice}</b></p>
        {short}
      </Card.Text>
        </Card.Body>
    <Card.Footer>
        <Link to={`/details/${_id}`}><button className='btn regularbtn fw-bold text-light'>Order Now</button>
        </Link>
    </Card.Footer>
        </Card>
         </Col>
    );
};

export default Season;