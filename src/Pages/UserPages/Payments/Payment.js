import React from 'react';
import {Row} from 'react-bootstrap';
import Checkoutform from './Checkoutform';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise =  loadStripe('pk_test_51Jw2mpBSwbB9BMbhsyE9VsMWMbgeGoz35VdXDYoB2C1QGFkx7JTaEG4FFXG3pyBkqupeooBX2z3nPu0zERZuO1Tw00ZtAW0Wtx');

const Payment = ({carts, totalflower, totalamount}) => {
    console.log('from payment', )
    return (
       <Row>
           <Elements  stripe={stripePromise}>
                <Checkoutform carts={carts} totalflower={totalflower} totalamount={totalamount}/>
           </Elements>
       </Row>
    );
};

export default Payment;