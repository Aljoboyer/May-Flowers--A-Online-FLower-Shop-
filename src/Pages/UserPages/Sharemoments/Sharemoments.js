import React, {useState} from 'react';
import {  Form, Row , Col} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Usernavbars from '../Usernavbars/Usernavbars';
import happy from '../../../asset/sharehappy.jpg';
import {PostMoments} from '../../../features/FlowerRedux/FlowerSlice';
import useFirebase from '../../SharedPages/FirebaseAuthentication/Firebaseauth';

const Sharemoments = () => {
    const [flowerdata, setFlowerdata] = useState({});
    const [img, setImg] = useState('');
    const {user} = useFirebase()
    const dispatch = useDispatch();

    const imgHandler = e => {
        const data = e.target.files[0];
        console.log(data)
        setImg(data)
    }
    const onBlurHandler = e => {
        const name = e.target.name;
        const val = e.target.value;
       
        const newdata = {...flowerdata};
        newdata[name] = val;
        setFlowerdata(newdata)
    }
    const AddMomentsHandler = (e) => {
        e.preventDefault()
 
        if(!img)
        {
            return;
        }
         const fd = new FormData();
         fd.append('username', user.displayName)
         fd.append('flowerprice', flowerdata.story)
         fd.append('img', img);

        if(fd){
            dispatch(PostMoments(fd))
            e.target.reset()
        }
    }
    return (
    <div className='container-fluid'>
        <Usernavbars></Usernavbars>
        <Row className='justify-content-center my-4'>
            <Col lg={5} md={6} sm={12}>
                <img className='img-fluid' src={happy} alt="" />
            </Col>
            <Col className='justify-content-center' lg={7} md={6} sm={12}>
                <h1 className='hometitle fs-1 my-4'>Share Your Happiest Moments With Us</h1>
                <Form onSubmit={AddMomentsHandler} className="login p-4">
                <Form.Group  controlId="formFile" className="mb-3">
                    <Form.Label className="fw-bold">Upload Your Happy Moments</Form.Label>
                    <Form.Control onChange={imgHandler} type="file" />
                    <Form.Group controlId="formGridEmail">
                <Form.Label className="fw-bold mt-4">Tell Us Behind The Story</Form.Label>
                <Form.Control as="textarea"  name="story" onBlur={onBlurHandler}  type="text" placeholder="Flower Details" />
                </Form.Group>
                </Form.Group>
                <button type='submit' className='btn regularbtn text-light'>SHARE</button>
            </Form>
            </Col>
        </Row>
 
    </div>
    );
};

export default Sharemoments;