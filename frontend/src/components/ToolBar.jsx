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

const ToolBar = () => {
  return (
    <Navbar bg="white" variant="light" style = {{"width" : "320px" , "height" : "47px" , "margin-top" :  "-48px" , "margin-left" : "1175px" , "border-radius" : "5px"}}>
        <Container className='toolbar-container'>
            <img src = {arrow} className='arrow-image'/>
            <img src = {timer} className='timer-image' />
            <img src = {vote} className='vote-image' />
            <img src = {focus} className='focus-image' />
            <img src = {estimation} className='estimation-image' />
            <img src = {note} className = "note-image" />
            <img src = {doubledown} className='doubledown-image' />
        </Container>
      </Navbar>
  )
}

export default ToolBar
