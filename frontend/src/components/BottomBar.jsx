import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'



import sidebar from '../assets/sidebar.png';
import minus from '../assets/minus.png';
import plus2 from '../assets/plus2.png';
import help from '../assets/help.png';

import { Tooltip } from '@mui/material';

const BottomBar = () => {

  let [zoomPercentage , setZoomPercentage] = useState(100)
  let [stopZoomIn , setStopZoomIn] = useState(false)
  let [stopZoomOut , setStopZoomOut] = useState(false)

  const ZoomInHandler = () => {
    if(stopZoomIn===false){
      console.log('inside the zoom in handler')
      document.body.style.transform = `scale(1.3)`
      document.body.style.width = '0px'
      document.body.style.height = '0px'
      document.body.style.background = 'lightgrey'

      // changin the position:fixed to position:absolute
      document.body.style.position = 'absolute'

      setZoomPercentage(125)

      setStopZoomIn(true)
      setStopZoomOut(false)
    }
    
  }


  const ZoomOutHandler = () => {
    if(stopZoomOut===false){
      console.log('inside the Zoom out handler')
      document.body.style.transform = `scale(1)`
      document.body.style.width = '1920px'
      document.body.style.height = window.innerHeight + 'px'
      document.body.style.position = 'fixed'
      document.body.style.top = '0px'
      document.body.style.bottom = '0px'
      document.body.style.left = '0px'
      document.body.style.right = '0px'
      document.onscroll = false;

      setZoomPercentage(100)

      setStopZoomOut(true)
      setStopZoomIn(false)
    }
    

  }


  return (
    <div>
      <Container fluid style = {{"width" : "47px" , "height" : "47px" , "background" : "white", "marginLeft" : "10px" , "marginTop" : "80px" , "borderRadius" : "5px" , "display" : "flex" , "flexDirection" : "column" , "justifyContent" : "center" , "alignItems" : "center" }}>
        
      <Tooltip placement = "right" title = {<h6 style = {{"marginTop" : "5px"}}>Show sidebar</h6>} arrow>
        <Row className='bottom-row'>
            <Col xs={2}>
                <img src={sidebar} alt = "sidebar" className ="sidebar-image" style = {{"width" : "24px" , "height" :"24px" , "marginTop" : "-2px" , "marginLeft" : "-12px"}}/>
            </Col>
        </Row>
        </Tooltip>
      </Container>


    <Navbar>
      <Container className = "helper-container" fluid style={{"width" : "250px" , "height" : "47px" , "background" : "white" , "marginLeft" : "1660px" , "marginTop" : "-60px" , "borderRadius" : "5px"}}>
            <Tooltip placement = "top" title = {<h6 style = {{"marginTop" : "5px"}}>Zoom out</h6>} arrow>
            <span className='helper-span' onClick = {ZoomOutHandler}>
                <img src={minus} alt = "minus" className='helper-image' />
            </span>
            </Tooltip>
            
            <span>{zoomPercentage}%</span>

            <Tooltip placement = "top" title = {<h6 style = {{"marginTop" : "5px"}}>Zoom in</h6>} arrow>
            <span className='helper-span' onClick = {ZoomInHandler}>
                <img src = {plus2} alt = "plus" className='helper-image' />
            </span>
            </Tooltip>

            <Tooltip placement = "top" title = {<h6 style = {{"marginTop" : "5px"}}>Learning center</h6>} arrow>
            <span className='helper-span'>
                <img src={help} alt = "help" className='helper-image' />
            </span>
            </Tooltip>

      </Container>
      </Navbar>
    </div>
  )
}

export default BottomBar
