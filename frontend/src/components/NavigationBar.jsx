import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import star from '../assets/star.png';
import settings from '../assets/settings.png';
import search from '../assets/search.png';
import upload from '../assets/upload.png'

const NavigationBar = () => {
  return (
    <Navbar bg="white" variant="light" style={{"width" : "545px" , "height" : "47px" , "border-radius" : "5px" , "margin-top" : "10px" , "text-shadow" : "gray" , "margin-left" : "10px"}}>
        <Container>
          <Navbar.Brand href="#home" className = "brand-name">Dwight</Navbar.Brand>
          <span>|</span>
          <Nav className="me-auto">
            <Nav.Link href="#home">Eisenhower Matrix Template</Nav.Link>
            <img src = {star} className = "star-image" />
            <span>|</span>
          </Nav>
            <span className = "set-upload-search" >
            <img src = {settings} className='settings-image' />
            <img src = {upload} className='upload-image' />
            <img src = {search} className='search-image' />
          </span>
        </Container>
      </Navbar>
  )
}

export default NavigationBar
