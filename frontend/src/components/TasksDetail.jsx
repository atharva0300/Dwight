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
import { setShowAllTasks , setType, setUpdateTask, setContent, setShowTaskCreation, setShowTaskUpdation, setShowTaskTypes } from '../features/taskSlice';

import { useSelector } from 'react-redux';

// importing compinents 
import TaskList from './TaskList';

// importing thunks 
import { getAllTasks, updateTask } from '../features/thunks/TaskThunk';
import { setShowDisplayCard } from '../features/matrixSlice';
import TaskCreation from './TaskCreation';
import TaskUpdation from './TaskUpdation';



let renderOnce = true;

const TasksDetail = () => {

    const dispatch = useDispatch()
    let currentNote = useSelector((state) => state.notes.note)
    let allNotes = useSelector((state) => state.notes.allNotes)
    let showTaskCreation = useSelector((state) => state.tasks.showTaskCreation)
    let showTaskUpdation = useSelector((state) => state.tasks.showTaskUpdation)
    let showTaskTypes = useSelector((state) => state.tasks.showTaskTypes)
    let showAllTasks = useSelector((state) => state.tasks.showAllTasks)
    let showDisplayCard = useSelector((state) => state.matrix.showDisplayCard)
    let quadrant = useSelector((state) => state.tasks.quadrant)
    let updateTaskBoolean = useSelector((state) => state.tasks.updateTaskBoolean)






    const createTask = () => {
        console.log('creating task')
        // creating a temporary object 
        let item = {
            'content' : 'this is content',
            'type' : 'delegate'
        }
        dispatch(appendNote(item))
    }


    const handleType = (type) => {
        dispatch(setUpdateTask(false))
        dispatch(setShowTaskTypes(false))
        dispatch(setShowTaskCreation(true))
        console.log('type : ' , type )
        dispatch(setType(type))
        dispatch(setContent(""))

    }


    const BackNavigate = () => {
        console.log('handling backNavigate task')

        // remove the contents of the task
        dispatch(setContent(""))

        if(showAllTasks===true){
            dispatch(setShowAllTasks(false))
            dispatch(setShowTaskTypes(true))
        }else if(showTaskCreation===true){
            dispatch(setShowTaskCreation(false))
            dispatch(setShowTaskTypes(true))
        }else if(showTaskUpdation===true){
            dispatch(setShowTaskUpdation(false))
            dispatch(setShowAllTasks(true))
        }
        
    }

    const handleShowAllTasks = async () => {
        console.log('handleShowAllTaskss')
        dispatch(setShowTaskTypes(false))
        dispatch(setShowAllTasks(true))
        
        // mentioning which quadrant's data do we want
        let item = {'quadrant' : quadrant}

        let response = await dispatch(getAllTasks(item))
        console.log('response : ' , response)

    }

    const closeTaskDetailHandler = () =>{
        console.log('closeTaskDetail')
        dispatch(setShowTaskCreation(false))
        dispatch(setShowTaskUpdation(false))
        dispatch(setShowAllTasks(false))
        dispatch(setShowTaskTypes(false))

        dispatch(setShowDisplayCard(false))
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
                <span><img src = {back} alt = "back" onClick={() => BackNavigate()}/></span>
                <span><img src= {upload} alt = "upload" /></span>
                </div>

                <div>
                <span><img src = {author} alt = "author" /></span>
                <p> | </p>
                <span><img src = {enlarge} alt = "enlarge" /></span>

                <span onClick={closeTaskDetailHandler}><img src = {close} alt = "close" /></span>
                </div>
            </div>
            <hr style = {{"width" : "550px" , "height" : "10px" , "marginTop" : "-70px"}}/>


            {showTaskCreation && <TaskCreation setShowTaskCreation = {setShowTaskCreation} />}
            {showTaskUpdation && <TaskUpdation setShowTaskUpdation={setShowTaskUpdation} /> }

            {showTaskTypes && 

            <div className='task-middle'>
                <div>
                    <h2>{quadrant}</h2>
                </div>
                <div onClick={createTask}>
                    <span><img src = {plus} alt = "plus" /></span>
                    <input type = "text" placeholder = "Type '/' to format or add blocks"/>
                </div>

                <div>
                    <span>Templates</span>
                    <div onClick={() => handleType('Todo List')}>
                        <img src = {tickbox} alt = "tickbox" />
                        <p>Todo List</p>
                    </div>
                    <div onClick={() => handleType('Meeting Agenda')}>
                        <img src = {clock} alt ="clock" />
                        <p>Meeting Agenda</p>
                    </div>
                    <div onClick={() => handleType('Project Summary')}>
                        <img src ={list} alt = "list" />
                        <p>Project Summary</p>
                    </div>
                    <div onClick={() => handleType('Workshop Notes')}>
                        <img src = {note} alt = "note" />
                        <p>Workshop Notes</p>
                    </div>
                    <div onClick={() => handleType('Board Annotation')}>
                        <img src = {board} alt = "board" />
                        <p>Board Annotation</p>
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
                    <img src = {back} onClick={BackNavigate} alt = "back button" style = {{'width' : '30px' , 'height' : '30px'}} />
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
