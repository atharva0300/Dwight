import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import arrow from '../assets/arrow.png'
import doubledown from '../assets/doubledown.png'
import timer from '../assets/timer.png'
import note from '../assets/note.png'
import focus from '../assets/focus.png'
import vote from '../assets/vote.png'
import estimation from '../assets/estimation.png'

import { Tooltip } from '@mui/material';

const ToolBar = () => {
  return (
    <Navbar bg="white" variant="light" style = {{"width" : "350px" , "height" : "47px" , "margin-top" :  "-48px" , "margin-left" : "1140px" , "border-radius" : "5px"}}>
        <Container className='toolbar-container'>
            <Tooltip title = {<h6 style = {{"margin-top" : "5px"}}>Hide apps</h6>} arrow><span><img src = {arrow} className='arrow-image'/></span></Tooltip>
            <Tooltip title = {<h6 style = {{"margin-top" : "5px"}}>Timer</h6>} arrow><span><img src = {timer} className='timer-image' /></span></Tooltip>
            <Tooltip title = {<h6 style = {{"margin-top" : "5px"}}>Voting</h6>} arrow><span><img src = {vote} className='vote-image' /></span></Tooltip>
            <Tooltip title = {<h6 style = {{"margin-top" : "5px"}}>Talltrack</h6>} arrow><span><img src = {focus} className='focus-image' /></span></Tooltip>
            <Tooltip title = {<h6 style = {{"margin-top" : "5px"}}>Estimation</h6>} arrow><span><img src = {estimation} className='estimation-image' /></span></Tooltip>
            <Tooltip title = {<h6 style = {{"margin-top" : "5px"}}>Note</h6>} arrow><span><img src = {note} className = "note-image" /></span></Tooltip>
            <Tooltip title = {<h6 style = {{"margin-top" : "5px"}}>More apps</h6>} arrow><span><img src = {doubledown} className='doubledown-image' /></span></Tooltip>
        </Container>
      </Navbar>
  )
}

export default ToolBar
