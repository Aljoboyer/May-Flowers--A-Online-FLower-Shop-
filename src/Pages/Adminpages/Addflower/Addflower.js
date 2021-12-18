import React, {useState} from 'react';
import {  Form, Row , Col} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { PostFlower } from '../../../features/FlowerRedux/FlowerSlice';
import './Addflower.css'
const Addflower = () => {
    const [flowerdata, setFlowerdata] = useState({});
    const [img, setImg] = useState('');
    const [img2, setImg2] = useState('');

    const dispatch = useDispatch();

    const imgHandler = e => {
        const data = e.target.files[0];
        setImg(data)
    }

    const img2Handler = e => {
        const data2 = e.target.files[0];
        setImg2(data2)
    }

    const onBlurHandler = e => {
        const name = e.target.name;
        const val = e.target.value;

        const newdata = {...flowerdata};
        newdata[name] = val;
        setFlowerdata(newdata)
    }

    const AddflowerHandler = e => {
        e.preventDefault();
        if(!img && !img2)
        {
            return;
        }
         const fd = new FormData();
         fd.append('flowername', flowerdata.flowername)
         fd.append('flowerprice', flowerdata.flowerprice)
         fd.append('flowerdetails', flowerdata.flowerdetails)
         fd.append('short', flowerdata.short)
         fd.append('category', flowerdata.category) 
         fd.append('ocassion', flowerdata.ocassion)  
         fd.append('img', img)
         fd.append('img2', img2)

        if(fd){
            dispatch(PostFlower(fd))
            e.target.reset()
        }
    }
    return (
       <Row className="justify-content-center my-4">
           
        <Col className="addflowerform " lg={8} sm={12} md={10}>
        <h3 className="text-center hometitle my-4">Add Flower</h3>
        <Form className="p-4" onSubmit={AddflowerHandler}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="fw-bold">Flower Name</Form.Label>
                <Form.Control name="flowername" onBlur={onBlurHandler} type="text" placeholder="Flower Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="fw-bold">Flower Price</Form.Label>
                <Form.Control  name="flowerprice" onBlur={onBlurHandler}  type="number" placeholder="Flower Price" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}  controlId="formFile" className="mb-3">
                    <Form.Label className="fw-bold">Choose Flower Image</Form.Label>
                    <Form.Control onChange={imgHandler} type="file" />
                </Form.Group>
                <Form.Group as={Col}  controlId="formFile" className="mb-3">
                    <Form.Label className="fw-bold">Choose Flower Second Image</Form.Label>
                    <Form.Control onChange={img2Handler} type="file" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="fw-bold">Ocassion</Form.Label>
                <Form.Control   name="ocassion" onBlur={onBlurHandler}  type="text" placeholder="Ocassion" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="fw-bold">Flower Category</Form.Label>
                <Form.Control   name="category" onBlur={onBlurHandler}  type="text" placeholder="Flower Category" />
                </Form.Group>

            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="fw-bold">Flower Short Description</Form.Label>
                <Form.Control as="textarea"  name="short" onBlur={onBlurHandler}  type="text" placeholder="Flower Details" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="fw-bold">Flower Details</Form.Label>
                <Form.Control as="textarea"  name="flowerdetails" onBlur={onBlurHandler}  type="text" placeholder="Flower Details" />
                </Form.Group>

            </Row>
            <button type="submit" className="btn btn-dark text-warning my-4">Add Flower</button>
            </Form>
        </Col>
       </Row>
    );
};

export default Addflower;