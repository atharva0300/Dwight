import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import cursor from '../assets/cursor.png';
import reaction from '../assets/reaction.png';
import user from '../assets/user.png';
import notification from '../assets/notification.png';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

import { Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// importing all the actions 
import { setShowUserSettings } from '../features/userSlice';



const UserBar = () => {

    const dispatch = useDispatch()
    const username = useSelector((state) => state.user.username)

    const handleUserSettings = () => {
        console.log('handling user settings')
        dispatch(setShowUserSettings())
    }

  return (
    <Navbar bg="white" variant="light" style ={{"width" : "410px" , "height" : "47px" , "marginTop" : "-47px" , "marginLeft" : "1500px" , "borderRadius" : "5px"}}>
        <Container>
            <div className = "user-container-one"> 
                <Tooltip title = {<h6 style = {{"margin-top" : "5px"}}>Hide collaborator's cursor</h6>} arrow><span><img src = {cursor} className = 'cursor-image' alt = "cursor" /></span></Tooltip>
                <Tooltip title = {<h6 style = {{"margin-top" : "5px"}}>Reactions</h6>} arrow><span><img src = {reaction} className='reaction-image' alt = "reaction" /></span></Tooltip>
                <Tooltip title = {<h6 style = {{"margin-top" : "5px"}}>Board owner</h6>} arrow><span onClick={handleUserSettings}>{username}</span></Tooltip>
                <Tooltip title = {<h6 style = {{"margin-top" : "5px"}}>Feed</h6>} arrow><span><img src = {notification} className='notification-image' alt = "notification" /></span></Tooltip>
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
                <Tooltip title = {<h6 style = {{"margin-top" : "5px"}}>Shared with 'board owner' team</h6>} arrow><span><Button className='share-button'>Share</Button></span></Tooltip>
            </div>
        </Container>
      </Navbar>
  )
}

export default UserBar
