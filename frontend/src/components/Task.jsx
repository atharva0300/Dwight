import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/esm/Container'

// importing actions 
import {  appendCardOneNotes , appendCardTwoNotes , appendCardThreeNotes , appendCardFourNotes} from '../features/noteSlice'
import {setContent} from '../features/taskSlice'
import { useDispatch, useSelector } from 'react-redux'

// importing task thunk
import { addTask, updateTask } from '../features/thunks/TaskThunk'

import {v4 as uuid } from 'uuid'


const Task = ({setShowTask }) => {
    let [currentType , setCurrentType] = useState()
    let [targetContent , setTargetContent ] = useState()

    let updateTaskBoolean = useSelector((state) => state.tasks.updateTaskBoolean)

    let currentUUID = useSelector((state) => state.tasks.uuid)
    let content = useSelector((state) => state.tasks.content)

    console.log('content : ' , content)

    let renderOnce = true

    // useSelector hooks 
    let type = useSelector((state) => state.tasks.type)
    let quadrant = useSelector((state) => state.tasks.quadrant)

    const dispatch = useDispatch()

    useEffect(() => {
        if(updateTaskBoolean===false && renderOnce===true ){
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

            // setTargetContent("")

            renderOnce = false
        }

        // setTargetContent(currentContent)
        console.log('target Ccontent : ' , targetContent)
        console.log('updateTaskBoolean : ' , updateTaskBoolean)


    } )


    const setContentHandle = (e) =>{
        console.log(e.target.value)
        setTargetContent(e.target.value)
    }

    const handleTaskSubmit = () => {

        // creating a uuid
        const unique_uuid = uuid()

        console.log('target content in the task : ' , targetContent)


        const task = {
            uuid : unique_uuid,
            quadrant : quadrant,
            type : currentType,
            content : targetContent
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

    const handleUpdateTask = () => {
        console.log('handling task update')

        const task = {
            uuid : currentUUID,
            quadrant : quadrant,
            type : type,
            content : targetContent
        }
        console.log('update task to submit : ' , task)
        console.log('handling task submit')

        setShowTask(false)

        // sending the post request 
        // invoking the updateTask thunk
        const response = dispatch(updateTask(task))

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
            { !updateTaskBoolean && <h4>Type of Task : {currentType}</h4>}
            { updateTaskBoolean && <h4>Type of Task : {type}</h4>}
            <hr />
        </div>

        <div>
            <textarea style = {{"width" : "500px" , "height" : "550px" , "marginLeft" : "-90px" }} defaultValue = {content} onChange = {setContentHandle} contentEditable = 'True' />
        </div>
        
        { !updateTaskBoolean && <button type = "submit" onClick={handleTaskSubmit}>Create Task</button>}
        { updateTaskBoolean && <button type = "submit" onClick={handleUpdateTask}>Update Task</button>}
    </Container>
  )
}

export default Task
