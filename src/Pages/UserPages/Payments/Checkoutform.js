import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
import { Col, Row , Form} from 'react-bootstrap';
import useFirebase from '../../SharedPages/FirebaseAuthentication/Firebaseauth';
import { useDispatch } from 'react-redux';
import { ClearCart } from '../../../features/FlowerRedux/FlowerSlice';

const Checkoutform = ({carts, totalflower, totalamount}) => {
    const [formdata, setFormdata] = useState({});
    const stripe = useStripe()
    const elements = useElements()
    const[clientSecret , setClientSecret] = useState('')
    const [porcessing, setProcessing] = useState(false)
    const [success, setSuccess] = useState('');
    const {user} = useFirebase()
    const dispatch = useDispatch()
     const onblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;

        const newdata = {...formdata};
        newdata[fieldname] = fieldvalue;
        setFormdata(newdata)
    }

     useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({totalamount})
        })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
    },[totalamount])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!stripe || !elements)
        {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null)
        {
            return ;
        }
        setProcessing(true)
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if(error)
        {
            setProcessing(false)
            setSuccess('')
            Swal.fire(
              `${error.message}`,
              '',
              'error'
            )
        }
        else{
            setProcessing(false)
            console.log(paymentMethod)
        }

        
         //payment intent
         const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            { 
              payment_method: {
                card: card,
                billing_details: {
                  name: formdata.username,
                  email: user.email
                },
              },
            },
          );
          if(intentError)
          {
            setProcessing(false)
            setSuccess('')
            Swal.fire(
                `${intentError.message}`,
                '',
                'error'
              )
          }
          else{
            setSuccess('success')
            Swal.fire(
                'Payment Succesfull',
                '',
                'success'
              )
            setProcessing(false)
            const payment = {
                username: formdata.name,
                paymentdate: new Date().toLocaleDateString(),
                amount: totalamount,
                floweramount: totalflower,
                phone: formdata.phone,
                email: user.email,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
             }
             
             //saving payment history database
             fetch('http://localhost:5000/addpayments',{
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(carts)
             })
             .then(res => res.json())
             .then(data => console.log(data))
             //saving payment status database
             fetch('http://localhost:5000/paymentstatus',{
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(payment)
             })
             .then(res => res.json())
             .then(data => console.log(data))
             dispatch(ClearCart(user.email))
          }

    }

    return (
        <div className="justify-content-center my-4 ">
            <Row className="d-flex justify-content-center align-items-center p-4"> 
                <Col lg={8} md={10} sm={12} className=" checkoutforms p-4 rounded">
                <Row>
                <Form.Floating className="mb-3 fw-bold text-primary">
                <Form.Control
                className="w-75"
                id="floatingInputCustom"
                type="text"
                name="username"
                onBlur={onblurHandler}
                placeholder="Your Name"
                required
                />
                <label htmlFor="floatingInputCustom">Your Name</label>
                </Form.Floating>

                <Form.Floating className="mb-3 fw-bold text-primary">
                <Form.Control
                disabled
                defaultValue={user.email}
                className="w-75"
                id="floatingInputCustom"
                type="email"
                name="email"
                placeholder="Your Email"
                required
                />
                <label htmlFor="floatingInputCustom">Your Email address</label>
                 </Form.Floating>

                <Form.Floating className="mb-3 fw-bold text-primary">
                    <Form.Control className="w-75"
                    id="floatingPasswordCustom"
                    type="number"
                    name="phone"
                    onBlur={onblurHandler}
                    placeholder="Your Phone Number"
                    required
                    
                    />
                    <label htmlFor="floatingPasswordCustom">Your Number</label>
                </Form.Floating>
                </Row>
                <form onSubmit={handleSubmit}>
                    
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '20px',
                        color: 'black',
                        '::placeholder': {
                            color: 'black',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                {
                    porcessing ? <p className="fw-bold text-primary">Processing...</p> :       <button className="btn btn-dark text-warning my-4" type="submit" disabled={!stripe || success}>
                    Checkout
                  </button>
                }

                 </form>
                </Col>
            </Row>
        </div>
    );
};

export default Checkoutform;