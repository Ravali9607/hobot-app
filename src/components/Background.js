import React from "react";
import { Navbar, Nav, NavDropdown, Container, Row, Col, Button } from 'react-bootstrap';

const Background = () => {
    return (
        <Container fluid className="bg_image">
            <Row>
                <Col md={12}>
                    <div className="text-center text_center">
                        <h1 className="text-white text_white mt-5"><b>Are You a Supplier?</b></h1>
                        <h1 className="text-white">Explore Matching Oppurtunities</h1>
                    </div>
                </Col>
                <Col md={1}></Col>
                <Col md={4}>
                    <input type="text" class="form-control p-2 input_tag" placeholder="Search your required service here" />
                </Col>
                <Col md={4}>
                    <input type="text" class="form-control p-2 input_tag" placeholder="Search your deserved location here" />
                </Col>
                <Col md={3}>
                    <button type="button" class="btn btn-success ">Search</button>
                </Col>
                <Col md={2}></Col>
                <Col md={10} className="text_center">
                    <div className="display-block">
                        <h5 style={{ display: 'inline-block', marginBottom: 0, color: 'white' }}><b>Are you a buyer?</b></h5>
                        <a style={{ display: 'inline-block', marginLeft: '10px', color: 'white', borderBottom: '1px solid #000' }}>Click here if you are looking to post a requirements</a>
                    </div>
                </Col> 

                {/* <Col md={10} className="text_center mt-3">
                    <div className="display-block">
                        <h5 style={{ display: 'inline-block', marginBottom: 0, color: 'white' }}><b>Are you a buyer?</b></h5>
                        <a style={{ display: 'inline-block', marginLeft: '10px', color: 'gray', borderBottom: '1px solid #000' }}>Click here if you are looking to post a requirements</a>
                    </div>
                </Col> */}


            </Row>
        </Container>
    )
}
export default Background;