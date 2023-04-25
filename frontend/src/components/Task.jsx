import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/esm/Container'

// importing actions 
import { appendNote  , appendCardOneNotes , appendCardTwoNotes , appendCardThreeNotes , appendCardFourNotes} from '../features/noteSlice'
import { useDispatch } from 'react-redux'
import TasksDetail from './TasksDetail'



const Task = ({type , currentCardType , setShowTask }) => {
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

        const task = {
            'type' : type,
            'content' : currentContent,
        }

        console.log('handling task submit')

        // condition on the type of task 
        if(currentCardType==='one'){
            dispatch(appendCardOneNotes(task))
        }else if(currentCardType==='two'){
            dispatch(appendCardTwoNotes(task))
        }else if(currentCardType==='three'){
            dispatch(appendCardThreeNotes(task))
        }else if(currentCardType==='four'){
            dispatch(appendCardFourNotes(task))
        }

        setShowTask(false)

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
