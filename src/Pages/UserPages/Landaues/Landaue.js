import React from 'react';
import { Card,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Landaue = ({flower}) => {
    const {_id,img, flowername, short, flowerprice} = flower
    return (
       
            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={`data:image/jpeg;base64,${img}`} />
             <Card.Body>
          <Card.Title className='regtext fs-4 fw-bold'>{flowername}</Card.Title>
          <Card.Text>
            <p><b>$ {flowerprice}</b></p>
            {short}
          </Card.Text>
            </Card.Body>
        <Card.Footer>
            <Link to={`/details/${_id}`}><button className='btn regularbtn  fw-bold text-light'>Order Now</button>
            </Link>
        </Card.Footer>
            </Card>
  
    );
};

export default Landaue;