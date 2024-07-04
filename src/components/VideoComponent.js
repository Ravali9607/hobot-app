import React from "react";
import '../index.css';
import Works from "./Works";
import Footer from "./Footer";


import {  Container, Row, Col, Button } from 'react-bootstrap';

const VideoComponent = () =>{
    return (
       
<section className="div_balck mt-4">
<Container className="bg-dark bg_dark_container">
           
             <Row>
                <Col lg={6} md={12} className="vic_width" >
                <iframe className='video_tag' width="500" height="400" src="https://www.youtube.com/embed/jgM2yTYFet8?si=lo6ewqkbtYCnHoEd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Col>
                <Col lg={6} md={12} xs={12}>
                <div className="suppliers">
                <div className="buyer">
                 <div className="buy">Buyer</div>
                 <div className="mt-3">
                <p className="text">Post your requirements</p>
                <p className="text">Post your requirements</p>
                <p className="text">Post your requirements</p>
                 </div>
                
                </div>
                <div className="buyer">
                suppliers
                </div>
                </div>
                
                </Col>
                
             </Row>
             
          
        </Container>
         <Works />
         <Footer />
</section>
        
      
    )
}
export default VideoComponent;