import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'

import cursor2 from '../assets/cursor2.png';
import template from '../assets/template.png';
import text from '../assets/text.png';
import stickynote from '../assets/stickynote.png';
import shapes from '../assets/shapes.png';
import arrow2 from '../assets/arrow2.png';
import pen from '../assets/pen.png';
import comments from '../assets/comments.png';
import frame from '../assets/frame.png';
import upload2 from '../assets/upload2.png';
import plus from '../assets/plus.png';

import {Tooltip} from '@mui/material';

const SideToolBar = () => {
  return (
    <Container className = "sidebar-container" fluid style = {{"width" : "50px" , "height" :  "480px" , "margin-left" : "10px" , "margin-top" : "150px"}}>
      
      <Tooltip placement = "right" title = {<h6 style = {{"margin-top" : "5px"}}>Select | V </h6>} arrow>
      <Row className = "sidebar-row">
        <Col xs={2}>
          <img src = {cursor2} className='sidebar-image' />
        </Col>
      </Row >
      </Tooltip>
      
      <Tooltip  placement = "right" title = {<h6 style = {{"margin-top" : "5px"}}>Templates</h6>} arrow>
      <Row className = "sidebar-row">
        <Col xs={2}>
          <img src = {template} className='sidebar-image'/>
        </Col>
      </Row>
      </Tooltip>
      

      <Tooltip  placement = "right" title = {<h6 style = {{"margin-top" : "5px"}}>Text | T </h6>} arrow>
      <Row className = "sidebar-row">
        <Col xs={2}>
          <img src = {text} className='sidebar-image' />
          </Col>
      </Row>
      </Tooltip>
      

      <Tooltip  placement = "right" title = {<h6 style = {{"margin-top" : "5px"}}>Sticky Note | N </h6>} arrow>
      <Row className = "sidebar-row">
        <Col xs={2}>
          <img src={stickynote} className='sidebar-image'/>
        </Col>
      </Row>
      </Tooltip>
     

      <Tooltip  placement = "right" title = {<h6 style = {{"margin-top" : "5px"}}>Shape | S </h6>} arrow>
      <Row className = "sidebar-row">
        <Col xs={2}>
          <img src = {shapes} className='sidebar-image'/>
        </Col>
      </Row>
      </Tooltip>
      

      <Tooltip  placement = "right" title = {<h6 style = {{"margin-top" : "5px"}}>Connection line | L </h6>} arrow>
      <Row className = "sidebar-row">
        <Col xs={2}>
          <img src = {arrow2} className='sidebar-image'/>
        </Col>
      </Row>
      </Tooltip>
     

      <Tooltip  placement = "right" title = {<h6 style = {{"margin-top" : "5px"}}>Pen | P </h6>} arrow>
      <Row className = "sidebar-row">
        <Col xs={2}>
          <img src = {pen} className='sidebar-image'/>
        </Col>
      </Row>
      </Tooltip>
      

      <Tooltip  placement = "right" title = {<h6 style = {{"margin-top" : "5px"}}>Comment | C </h6>} arrow>
      <Row className = "sidebar-row">
        <Col xs={2}>
          <img src = {comments} className='sidebar-image'/>
        </Col>
      </Row>
      </Tooltip>
      

      <Tooltip  placement = "right" title = {<h6 style = {{"margin-top" : "5px"}}>Frame | F </h6>} arrow>
      <Row className = "sidebar-row">
        <Col xs={2}>         
          <img src = {frame} className='sidebar-image' />
        </Col>
      </Row>
      </Tooltip>
      

      <Tooltip  placement = "right" title = {<h6 style = {{"margin-top" : "5px"}}>Upload</h6>} arrow>
      <Row className = "sidebar-row">
        <Col xs={2}>
          <img src = {upload2} className='sidebar-image' />
        </Col>
      </Row>
      </Tooltip>
      

      <Tooltip  placement = "right" title = {<h6 style = {{"margin-top" : "5px"}}>More apps</h6>} arrow>
      <Row className = "sidebar-row">
        <Col xs={2}>
          <img src = {plus} className='sidebar-image' />
        </Col>
      </Row>
      </Tooltip>
      
    </Container>
  )
}

export default SideToolBar
