import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import cursor from '../assets/cursor.png';
import reaction from '../assets/reaction.png';
import user from '../assets/user.png';
import notification from '../assets/notification.png';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const UserBar = () => {
  return (
    <Navbar bg="white" variant="light" style ={{"width" : "410px" , "height" : "47px" , "margin-top" : "-47px" , "margin-left" : "1500px" , "border-radius" : "5px"}}>
        <Container>
            <div className = "user-container-one"> 
                <span><img src = {cursor} className = 'cursor-image' /></span>
                <span><img src = {reaction} className='reaction-image' /></span>
                <span><img src = {user} className='user-image' /></span>
                <span><img src = {notification} className='notification-image' /></span>
            </div>
            <div className='user-container-two'>
                <span>
                    <Dropdown as={ButtonGroup}>
                        <button className='present-button'>Present</button>
                        <Dropdown.Toggle split id="dropdown-custom-2" className="present-dropdown" />
                        <Dropdown.Menu >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                            Active Item
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </span>
                <span><Button className='share-button'>Share</Button></span>

            </div>
        </Container>
      </Navbar>
  )
}

export default UserBar
