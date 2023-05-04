import React, { useEffect } from 'react';
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
import { setShowTask , setShowAllTasks , setType } from '../features/taskSlice';

import { useSelector } from 'react-redux';

// importing compinents 
import Task from './Task';
import TaskList from './TaskList';

// importing thunks 
import { getAllTasks } from '../features/thunks/TaskThunk';





const TasksDetail = ({displayCard , showDisplayCard ,setShowDisplayCard }) => {

    const dispatch = useDispatch()
    let currentNote = useSelector((state) => state.notes.note)
    let allNotes = useSelector((state) => state.notes.allNotes)
    let showTask = useSelector((state) => state.tasks.showTask)
    let showAllTasks = useSelector((state) => state.tasks.showAllTasks)

    let quadrant = useSelector((state) => state.tasks.quadrant)

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

    
    const handleType = (type) => {
        console.log('type : ' , type )
        dispatch(setType(type))
        dispatch(setShowTask())
    }


    const handleShowTask = () => {
        console.log('handling show task')
        if(showTask===true){
            dispatch(setShowTask())
        }
        
    }

    const handleShowAllTasks = async () => {
        console.log('handleShowAllTaskss')
        
        dispatch(setShowTask())
        dispatch(setShowAllTasks())
        
        // mentioning which quadrant's data do we want
        let item = {'quadrant' : quadrant}

        let response = await dispatch(getAllTasks(item))
        console.log('response : ' , response)
    }


  return (
    <div>
        {showDisplayCard && 
        <motion.div className='taskdetail-container'
            animate ={{'type' : 'tween' , duration : 0.5 }}
        >
            {!showAllTasks && 
         <Container className='task-container'>

            <div className='task-top'>
                <div>
                <span><img src = {pin} alt = "pin" /></span>
                <p>Note | </p>
                <span><img src = {back} alt = "back" onClick={() => handleShowTask()}/></span>
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


            {showTask && <Task setShowTask = {setShowTask} />}

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
                    <div className='show-all-tasks'>
                        <button type = "submit" onClick={handleShowAllTasks} >Show All Tasks</button>
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
        }

        {showAllTasks && 
        
            <Container>

                <div className='back-button'>
                    <img src = {back} onClick={handleShowAllTasks} alt = "back button" style = {{'width' : '30px' , 'height' : '30px'}} />
                </div>

                <div>
                    <TaskList />
                </div>
            </Container>
        }
        </motion.div>
        }   
    </div>
  )
}

export default TasksDetail
