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
      <Container fluid style = {{"width" : "47px" , "height" : "47px" , "background" : "white", "marginLeft" : "10px" , "marginTop" : "80px" , "borderRadius" : "5px" , "display" : "flex" , "flexDirection" : "column" , "justifyContent" : "center" , "alignItems" : "center" }}>
        
      <Tooltip placement = "right" title = {<h6 style = {{"marginTop" : "5px"}}>Show sidebar</h6>} arrow>
        <Row className='bottom-row'>
            <Col xs={2}>
                <img src={sidebar} className ="sidebar-image" style = {{"width" : "24px" , "height" :"24px" , "marginTop" : "-2px" , "marginLeft" : "-12px"}}/>
            </Col>
        </Row>
        </Tooltip>
      </Container>


    <Navbar>
      <Container className = "helper-container" fluid style={{"width" : "250px" , "height" : "47px" , "background" : "white" , "marginLeft" : "1660px" , "marginTop" : "-60px" , "borderRadius" : "5px"}}>
            <Tooltip placement = "top" title = {<h6 style = {{"marginTop" : "5px"}}>Zoom out</h6>} arrow>
            <span className='helper-span'>
                <img src={minus} className='helper-image' />
            </span>
            </Tooltip>
            
            <span>100%</span>

            <Tooltip placement = "top" title = {<h6 style = {{"marginTop" : "5px"}}>Zoom in</h6>} arrow>
            <span className='helper-span'>
                <img src = {plus2}  className='helper-image' />
            </span>
            </Tooltip>

            <Tooltip placement = "top" title = {<h6 style = {{"marginTop" : "5px"}}>Learning center</h6>} arrow>
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
