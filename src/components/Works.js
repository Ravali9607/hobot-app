import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUserCircle,
    faFile,
    faHandshake
} from '@fortawesome/free-solid-svg-icons'; // Import from free-solid-svg-icons for solid icons

const Works = () => {
    return (
        <Container>
            <Row className="padd_div">
                <Col md={5}>
                    <div className="margin">
                        <h3>Let Suppliers Find you</h3>
                    </div>
                </Col>
                <Col md={4}></Col>
                <Col md={3}>
                    <div className="margin">
                        <Button className='btn btn-success'>Get Verified</Button>
                    </div>
                </Col>

                <Col md={2}></Col>
                <Col md={8}>
                    <div className="center_text">
                        <h2 className="text_paddings">How It Works?</h2>
                        <p className="text_paddings">
                            Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
                        </p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="text-center">
                        <FontAwesomeIcon icon={faUserCircle} size="5x" style={{ color: 'black' }} className="user_text" />
                        <p className="user_text"><b>Select Your Role and<br></br>Sign Up.</b></p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="text-center">
                        <FontAwesomeIcon icon={faFile} size="5x" style={{ color: 'black' }} className="user_text" />
                        <p className="user_text"><b>Buyers post your<br></br>requirements</b></p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="text-center">
                        <FontAwesomeIcon icon={faFile} size="5x" style={{ color: 'black' }} className="user_text" />
                        <p className="user_text"><b>Review, Select, and<br></br>Contact the best Suppliers</b></p>
                    </div>
                </Col>

                <Col md={4} className="mt-3">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faUserCircle} size="5x" style={{ color: 'black' }} className="user_text" />
                        <p className="user_text"><b>Suppliers complete your<br></br>Profile and get notified for<br></br>Opportunities</b></p>
                    </div>
                </Col>
                <Col md={4} className="mt-3">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faFile} size="5x" style={{ color: 'black' }} className="user_text" />
                        <p className="user_text"><b>Contact buyers and share<br></br>your Quote for the services.</b></p>
                    </div>
                </Col>
                <Col md={4} className="mt-3">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faHandshake} size="5x" style={{ color: 'black' }} className="user_text" />
                        <p className="user_text"><b>Both parties can connect<br></br>and make business, leave a Feedback.</b></p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Works;
