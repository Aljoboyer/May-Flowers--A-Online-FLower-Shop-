import React, { useEffect , useState} from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AddToCart, ClearCartData, decrement, GetFlowerByid, increment} from '../../../features/FlowerRedux/FlowerSlice';
import useFirebase from '../../SharedPages/FirebaseAuthentication/Firebaseauth';
import Usernavbars from '../Usernavbars/Usernavbars';
import Detailsslider from './DetailsSlider/Detailsslider';

const Details = () => {
    const {user} = useFirebase()
    const {id} = useParams();
    const [formdata, setFormdata] = useState({});
    const [deliverydate, setDeliverydate] = useState(new Date())
    const dispatch = useDispatch();
    const status = 'pending'
    const DateBlurHandler = e => {
        const dat = e.target.value
        const newdat = dat.toLocaleDateString()
        setDeliverydate(newdat)
    }
    const onblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;

        const newdata = {...formdata};
        newdata[fieldname] = fieldvalue;
        setFormdata(newdata)
    }

        useEffect(() => {
            dispatch(GetFlowerByid(id))
    },[dispatch,id]);

    const flowers = useSelector((state) => state.flowers.allflowers);
    const flower = flowers?.find(f => f._id === id)
    const floweramount = useSelector((state) => state.flowers.orderfloweramount);
    const singletotal = useSelector((state) => state.flowers.singletotal);
   
    const AddtocartHandler = () => {
        const deliverydata = {...formdata, email: user.email, deliverydate, flowerimg: flower.img, floweramount, singletotal, flowername: flower.flowername, status};
        if(deliverydata.email)
        {
            dispatch(AddToCart(deliverydata));
            dispatch(ClearCartData())
        }
       
    }

    return (
        <div className="container-fluid">
            <Usernavbars></Usernavbars>
            {
                flower.img ? <Row className="justify-content-center">
                <h1 className='text-center hometitle my-4'>Flowers Details</h1>
                <Col lg={7} md={6} sm={12}>
                    <Row className="justify-content-center">
                        <Col lg={6} md={12} sm={12}>
                            <img className='rounded img-fluid' src={`data:image/jpeg;base64,${flower.img}`} alt=""/>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <img className='rounded img-fluid' src={`data:image/jpeg;base64,${flower.img2}`} alt=""/>
                        </Col>
                    </Row>
                    <Row>
                        <h4 className="my-4 regtext">{flower.flowername}</h4>
                        <h6><b>$ {flower.flowerprice}</b></h6>
                        <p>{flower.short}</p>
                        <p>{flower.flowerdetails}</p>
                    </Row>
                </Col>
                {
                    flower.img ? <Col className='' lg={4} md={6} sm={12}>
                    <Row className='login p-4'>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="fw-bold">Choose Your Delivery Date</Form.Label>
                    <Form.Control onBlur={DateBlurHandler} name="deliverydate"  type="date"  />
                    </Form.Group>
                    <hr />
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
                    <hr />
                        <Form.Floating className="mb-3 fw-bold text-primary">
                        <Form.Control className="w-75"
                        as="textarea"
                        id="floatingPasswordCustom"
                        type="text"
                        name="location"
                        onBlur={onblurHandler}
                        placeholder="Your Location"
                        required
                        
                        />
                        <label htmlFor="floatingPasswordCustom">Your Location</label>
                        </Form.Floating>
                    <hr />
                    <h5 className="my-2 fw-bold">Total Amount: $ {singletotal}</h5>
                    <hr />
                    <h5><i onClick={() => dispatch(increment(parseInt(flower.flowerprice)))} className="fas fa-plus fa-2x mx-2"></i> <span>{floweramount}</span>
                    <i onClick={() => dispatch(decrement(parseInt(flower.flowerprice)))} className="far fa-minus-square fa-2x mx-2"></i></h5>
                    <button onClick={AddtocartHandler} className='btn regularbtn text-light fw-bold mt-4'>Add To Cart</button>
                    </Row>
                </Col>
                : <div className="spinner"></div>
                }
            </Row> : <div className="spinner"></div>
            }
            <Detailsslider></Detailsslider>
        </div>
    );
};

export default Details;