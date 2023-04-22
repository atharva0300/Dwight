import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'

import undo from '../assets/undo.png';
import redo from '../assets/redo.png';


import { Tooltip } from '@mui/material';

const UndoRedoBar = () => {
  return (
    <Container className = "undo-redo-container" fluid style = {{"width" : "50px",  "height": "100px" , "margin-left" : "10px", "margin-top" : "15px"}}>
        <Tooltip placement = "right" title = {<h6 style = {{"margin-top" : "5px"}}>Undo</h6>} arrow>
        <Row className='undo-redo-row'>
            <Col xs ={2}>
                <img src={undo} className='img-undo-redo'/>
            </Col>
        </Row>
        </Tooltip>

        <Tooltip placement = "right" title = {<h6 style = {{"margin-top" : "5px"}}>Redo</h6>} arrow>
        <Row className='undo-redo-row'>
            <Col xs ={2}>
                <img src={redo} className='img-undo-redo'/>
            </Col>
        </Row>
        </Tooltip>
    </Container>
  )
}

export default UndoRedoBar
