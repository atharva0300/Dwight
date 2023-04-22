import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import star from '../assets/star.png';
import settings from '../assets/settings.png';
import search from '../assets/search.png';
import upload from '../assets/upload.png';

import Tooltip from '@mui/material/Tooltip';

const NavigationBar = () => {
  return (
    <Navbar bg="white" variant="light" style={{"width" : "545px" , "height" : "47px" , "border-radius" : "5px" , "margin-top" : "10px" , "text-shadow" : "gray" , "margin-left" : "10px"}}>
        <Container>
          <Tooltip title = {<h6 style = {{"margin-top" : "5px"}}>Go to boards</h6>} arrow><Navbar.Brand href="#home" className = "brand-name">Dwight</Navbar.Brand></Tooltip>
          <span>|</span>
            <Nav className="me-auto">
            <Tooltip title = {<h6 style = {{"margin-top" : "5px"}}>Edit board settings</h6>} arrow><Nav.Link href="#home">Eisenhower Matrix Template</Nav.Link></Tooltip>
              <Tooltip title = {<h6 style = {{"margin-top" : "5px"}}>Star this board</h6>} arrow><img src = {star} className = "star-image" /></Tooltip>
              <span>|</span>
            </Nav>
            <span className = "set-upload-search" >
            <Tooltip title = {<h6 style = {{"margin-top" : "5px"}}>Settings</h6>} arrow><img src = {settings} className='settings-image' /></Tooltip>
            <Tooltip title = {<h6 style = {{"margin-top" : "5px"}}>Export this board</h6>} arrow><img src = {upload} className='upload-image' /></Tooltip>
            <Tooltip title = {<h6 style = {{"margin-top" : "5px"}}>Search | CTRL + F </h6>} arrow><img src = {search} className='search-image' /></Tooltip>
          </span>
        </Container>
      </Navbar>
  )
}

export default NavigationBar
