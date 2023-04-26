import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

import {motion} from 'framer-motion';

import pin from '../assets/pin.png'
import upload from '../assets/upload.png'
import author from '../assets/author.png'
import close from '../assets/close.png'
import help2 from '../assets/help2.png'
import reaction2 from '../assets/reaction2.png'
import enlarge from '../assets/enlarge.png'
import back from '../assets/back.png'

// importing images 
import plus from '../assets/grey/plus.png';
import tickbox from '../assets/grey/tickbox.png'
import clock from '../assets/grey/clock.png'
import list from '../assets/grey/list.png'
import note from '../assets/grey/note.png'
import board from '../assets/grey/board.png'
import { useDispatch } from 'react-redux';

// importing actions
import { appendNote } from '../features/noteSlice';


import { useSelector } from 'react-redux';

// importing componetns 
import Task from './Task';


const TasksDetail = ({displayCard , showDisplayCard ,setShowDisplayCard , currentCardType }) => {

    const dispatch = useDispatch()
    let currentNote = useSelector((state) => state.notes.note)
    let allNotes = useSelector((state) => state.notes.allNotes)



    // all useState hooks 
    let [showTask , setShowTask] = useState(false)
    let [type , setType] = useState('')

    const createTask = () => {
        console.log('creating task')
        // creating a temporary object 
        let item = {
            'content' : 'this is content',
            'type' : 'delegate'
        }
        dispatch(appendNote(item))
    }

    useEffect(() => {
        console.log('displaying allNotes')
        console.log('allNotes : ' , allNotes)
    })

    useEffect(() => {
        console.log('type : ' , type)
    } , [type])
    
    const handleType = (type) => {
        console.log('type : ' , type )
        setType(type)
        setShowTask(true)
    }


  return (
    <div>
        {showDisplayCard && 
        <motion.div className='taskdetail-container'
            animate ={{'type' : 'tween' , duration : 0.5 }}
        >
         <Container className='task-container'>

            <div className='task-top'>
                <div>
                <span><img src = {pin} alt = "pin" /></span>
                <p>Note | </p>
                <span><img src = {back} alt = "back" onClick={() => setShowTask(false)}/></span>
                <span><img src= {upload} alt = "upload" /></span>
                </div>

                <div>
                <span><img src = {author} alt = "author" /></span>
                <p> | </p>
                <span><img src = {enlarge} alt = "enlarge" /></span>
                <span onClick={() => setShowDisplayCard(false)}><img src = {close} alt = "close" /></span>
                </div>
            </div>
            <hr style = {{"width" : "550px" , "height" : "10px" , "marginTop" : "0px"}}/>

            {showTask && <Task type = {type} currentCardType = {currentCardType} setShowTask = {setShowTask} />}

            {!showTask && 

            <div className='task-middle'>
                <div>
                    <h2>{displayCard}</h2>
                </div>
                <div onClick={createTask}>
                    <span><img src = {plus} alt = "plus" /></span>
                    <input type = "text" placeholder = "Type '/' to format or add blocks"/>
                </div>

                <div>
                    <span>Templates</span>
                    <div onClick={() => handleType('0')}>
                        <img src = {tickbox} alt = "tickbox" />
                        <p>To do List</p>
                    </div>
                    <div onClick={() => handleType('1')}>
                        <img src = {clock} alt ="clock" />
                        <p>Meeting Agenda</p>
                    </div>
                    <div onClick={() => handleType('2')}>
                        <img src ={list} alt = "list" />
                        <p>Project summary</p>
                    </div>
                    <div onClick={() => handleType('3')}>
                        <img src = {note} alt = "note" />
                        <p>Workshop notes</p>
                    </div>
                    <div onClick={() => handleType('4')}>
                        <img src = {board} alt = "board" />
                        <p>Board annotation</p>
                    </div>
                </div>
            </div>

            }

            <div className='task-bottom'>
                <div>
                <img src = {reaction2} alt = "reaction" />
                <img src = {help2} alt = "help" />
                </div>
                <span>100%</span>
            </div>
            
        </Container>   
        </motion.div>
        }   
    </div>
  )
}

export default TasksDetail
