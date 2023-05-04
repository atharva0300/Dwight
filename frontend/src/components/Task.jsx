import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/esm/Container'

// importing actions 
import { appendNote  , appendCardOneNotes , appendCardTwoNotes , appendCardThreeNotes , appendCardFourNotes} from '../features/noteSlice'
import { useDispatch } from 'react-redux'
import TasksDetail from './TasksDetail'
import { setShowTask } from '../features/taskSlice'

// importing task thunk
import { addTask } from '../features/thunks/TaskThunk'

import {v4 as uuid } from 'uuid'



const Task = ({type , quadrant , setShowTask }) => {
    let [currentType , setCurrentType] = useState()
    let [currentContent , setCurrentContent ] = useState()


    const dispatch = useDispatch()

    useEffect(() => {
        console.log('type in useEffect : ' , type)
        if(type==='0'){
            setCurrentType('Todo')
        }else if(type==='1'){
            setCurrentType('Meeting Agenda')
        }else if(type==='2'){
            setCurrentType('Project Summary')
        }else if(type==='3'){
            setCurrentType('Workshop Notes')
        }else if(type==='4'){
            setCurrentType('Board Annotation')
        }

        console.log('currentType : ' , currentType)
    }, [type])

    const setContentHandle = (e) =>{
        setCurrentContent(e.target.value)
    }

    const handleTaskSubmit = () => {

        // creating a uuid
        const unique_uuid = uuid()


        const task = {
            uuid : unique_uuid,
            quadrant : quadrant,
            type : currentType,
            content : currentContent
        }

        console.log('handling task submit')

        // condition on the type of task 
        if(quadrant==='one'){
            dispatch(appendCardOneNotes(task))
        }else if(quadrant==='two'){
            dispatch(appendCardTwoNotes(task))
        }else if(quadrant==='three'){
            dispatch(appendCardThreeNotes(task))
        }else if(quadrant==='four'){
            dispatch(appendCardFourNotes(task))
        }

        setShowTask(false)

        // sending the post request 
        // invoking the addTask thunk
        const response = dispatch(addTask(task))

        if (response.message==='1'){
            console.log('SUCCESS')
        }else if(response.message==='2'){
            console.log('ERROR')
        }


        // navigate back to the taskDetail page 
        dispatch(setShowTask())
        
    }




  return (
    <Container className = "task">
        <div>
            <h4>Type of Task : {currentType}</h4>
            <hr />
        </div>

        <div>
            <textarea style = {{"width" : "500px" , "height" : "550px" , "marginLeft" : "-90px" }} onChange = {setContentHandle} />
        </div>
        
        <button type = "submit" onClick={handleTaskSubmit}>Create Task</button>
    </Container>
  )
}

export default Task
