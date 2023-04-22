import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'



import sidebar from '../assets/sidebar.png';
import minus from '../assets/minus.png';
import plus2 from '../assets/plus2.png';
import help from '../assets/help.png';

import { Tooltip } from '@mui/material';

const BottomBar = () => {
  return (
    <div>
      <Container fluid style = {{"width" : "47px" , "height" : "47px" , "background" : "white", "margin-left" : "10px" , "margin-top" : "80px" , "border-radius" : "5px" , "display" : "flex" , "lfex-direction" : "column" , "justify-content" : "center" , "align-items" : "center" }}>
        
      <Tooltip placement = "right" title = {<h6 style = {{"margin-top" : "5px"}}>Show sidebar</h6>} arrow>
        <Row className='bottom-row'>
            <Col xs={2}>
                <img src={sidebar} className ="sidebar-image" style = {{"width" : "24px" , "height" :"24px" , "margin-top" : "-2px" , "margin-left" : "-12px"}}/>
            </Col>
        </Row>
        </Tooltip>
      </Container>


    <Navbar>
      <Container className = "helper-container" fluid style={{"width" : "250px" , "height" : "47px" , "background" : "white" , "margin-left" : "1660px" , "margin-top" : "-60px" , "border-radius" : "5px"}}>
            <Tooltip placement = "top" title = {<h6 style = {{"margin-top" : "5px"}}>Undo</h6>} arrow>
            <span className='helper-span'>
                <img src={minus} className='helper-image' />
            </span>
            </Tooltip>
            
            <span>100%</span>

            <Tooltip placement = "top" title = {<h6 style = {{"margin-top" : "5px"}}>Redo</h6>} arrow>
            <span className='helper-span'>
                <img src = {plus2}  className='helper-image' />
            </span>
            </Tooltip>

            <Tooltip placement = "top" title = {<h6 style = {{"margin-top" : "5px"}}>Learning center</h6>} arrow>
            <span className='helper-span'>
                <img src={help}  className='helper-image' />
            </span>
            </Tooltip>

      </Container>
      </Navbar>
    </div>
  )
}

export default BottomBar
