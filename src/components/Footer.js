import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Import from free-brands-svg-icons for brand icons

const Footer = () => {
    return (
        <Container fluid className="footer_container">
            <Row>
                <Col md={8} xs={12}>
                <div className="footer_div">
                <div className="company_div">
                    <img src='./images/hobot.jpg' className="hobot_footer"/>
                    </div>
                    <div className="company_div">
                        <h6 style={{color:'white'}}>Company</h6>
                        <p className="text_color">About</p>
                        <p className="text_color">FAQ</p>
                    </div>
                    <div className="company_div">
                        <h6 style={{color:'white'}}>Tearms</h6>
                        <p className="text_color">About</p>
                        <p className="text_color">FAQ</p>
                    </div>
                    <div className="company_div">
                        <h6 style={{color:'white'}}>Related</h6>
                        <p className="text_color">About</p>
                        <p className="text_color">FAQ</p>
                    </div>
                </div>
                </Col>
                <Col md={4}>
                <div className="company_div2">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#0077B5' }} className="linkein"/>
                        <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#E4405F' }} className="linkein"/>
                        <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#3B5998' }} className="linkein"/>
                        <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#3B5998' }} className="linkein"/>
                        {/* Add more icons here if needed */}
                 </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Footer;