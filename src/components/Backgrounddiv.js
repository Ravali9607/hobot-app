import React from "react";
import { Navbar, Nav, NavDropdown, Container, Row, Col, Button } from 'react-bootstrap';
import VideoComponent from "./VideoComponent";
const Backgrounddiv = () =>{
    return (
        <section>
            <Container>
                <Row>
                    <Col md={5} className="mt-5">
                     <h3 className="text-dark">Ready to dive into HABOT?</h3>
                     <p className="mt-4">signing up with HABOT opens the door to a world of new Oppurtunities and potential for business growth.
                            Gain access to a vibrant community of like-minded individuals,unlock variable resources,and take the first step towards realizing your dreams 
                        </p>
                        <button type="button" class="btn btn-success">Sign Up Today!  →</button>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={5} className="mt-5">
                    <Button variant="outline-primary" className="mx-2 custom-btn">Abu Dhabi</Button>
                    <Button variant="outline-primary" className="mx-2 custom-btn">Dubai</Button>

                    <Button variant="outline-primary" className="mx-2 custom-btn">Shar jah</Button>
                    <Button variant="outline-primary" className="mx-2 custom-btn">Dubai</Button>

                    <Button variant="outline-primary" className="mx-2 custom-btn">Abu Dhabi</Button>
                    <Button variant="outline-primary" className="mx-2 custom-btn">Dubai</Button>
                    </Col>
                    
                </Row>
            </Container>
            
            <VideoComponent/>
        </section>
    )
}
export default Backgrounddiv;