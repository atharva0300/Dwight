import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NoteToolBar = () => {
  return (
    <Container className = "note-features-container" style ={{"width" : "400px" , "height" : "50px" , "background" : "white"}}>
        <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
    </Container>
  )
}

export default NoteToolBar
