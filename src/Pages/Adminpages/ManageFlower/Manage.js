import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Manage = ({flower, DeleteHanler}) => {
    const {_id,img, flowername, short, flowerprice} = flower
    return (
        <Col lg={4} md={6} sm={12}>
        <Card>
        <Card.Img variant="top" src={`data:image/jpeg;base64,${img}`} />
         <Card.Body>
      <Card.Title>{flowername}</Card.Title>
      <Card.Text>
        <p><b>$ {flowerprice}</b></p>
        {short}
      </Card.Text>
        </Card.Body>
    <Card.Footer>
        <button className='btn btn-warning text-dark fw-bold mx-3'>Edit Flower</button>
        <button  onClick={() => DeleteHanler(_id)} className='btn btn-dark text-warning fw-bold'>Delete Flower</button>
    </Card.Footer>
        </Card>
    </Col>
    );
};

export default Manage;