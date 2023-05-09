import React, { useEffect, useState } from 'react'


// importing actions 
import { useDispatch, useSelector } from 'react-redux'

// importing task thunk
import { getIconImage, updateTask } from '../features/thunks/TaskThunk';

import DateTime from 'react-datetime'
import "react-datetime/css/react-datetime.css";
import { setCompleted, setDue, setFetchIcomImage, setQuadrant, setReminder, setType } from '../features/taskSlice';


import {v4 as uuid } from 'uuid'

let renderOnce = true

const TaskUpdation = ({setShowTaskUpdation }) => {
    // defining the variables when the updation is False 
    let [currentIconPath , setCurrentIconPath] = useState()
    let [attachFiles , setAttachFiles ] = useState()
    let [iconFile , setIconFile] = useState()
    let [targetContent , setTargetContent] = useState()

    // obtain the above fields ( which can be modified ) to populate the from 
    let quadrant = useSelector((state) => state.tasks.quadrant)
    let iconPath = useSelector((state) => state.tasks.iconPath)
    let reminder = useSelector((state) => state.tasks.reminder)
    let due = useSelector((state) => state.tasks.due)
    let completed = useSelector((state) => state.tasks.completed)
    let content = useSelector((state) => state.tasks.content)
    let taskUUID = useSelector((state) => state.tasks.taskUUID)
    

    let initialDue = new Date(due)
    let initialReminder = new Date(reminder)
    
    console.log('content : ' , content)
    let fetchIconImage = useSelector((state) => state.tasks.fetchIconImage)
    let taskUpdationSuccess = useSelector((state) => state.tasks.taskUpdationSuccess)

    // useSelector hooks 
    let type = useSelector((state) => state.tasks.type)



    const dispatch = useDispatch()
    if(fetchIconImage){
        const item = {
            iconPath : iconPath,
            taskUUID : taskUUID
        }
        dispatch(getIconImage(item))
        console.log('dispatched getIconImage')
        dispatch(setFetchIcomImage(false))
    }

    // importing task.state
    let userID = useSelector((state) => state.tasks.userID)
    

    const handleUpdateTask = () => {
        console.log('handling task update')

        // creating a uuid
        const unique_uuid = uuid()

        let uploadData = new FormData()

        uploadData.append('user', userID)
        uploadData.append('quadrant' , quadrant)
        uploadData.append('type' , type)
        uploadData.append('content' , targetContent)
        uploadData.append('taskUUID' , unique_uuid)
        uploadData.append('due' , due)
        uploadData.append('reminder' , reminder)
        uploadData.append('icon' , iconFile , iconFile.name ) 
        uploadData.append('completed' , completed)

        console.log('formData before dispatching uploadTask : ' , uploadData)

        dispatch(updateTask(uploadData))


        if (taskUpdationSuccess==='1'){
            console.log('SUCCESS')
        }else if(taskUpdationSuccess==='2'){
            console.log('ERROR')
        }

    }


    const handleQuadrantUpdation = (e) => {
        dispatch(setQuadrant(e.target.value))
    }

    const handleTypeUpdation = (e) => {
        dispatch(setType(e.target.value))
    }

    const handleCompletedUpdation = (e) => {
        dispatch(setCompleted(e.target.value))
    }

    const handleDueUpdation = (e) =>{
        dispatch(setDue(e.toDate))
    }

    const handleReminderUpdation = (e) => {
        dispatch(setReminder(e.toDate))
    }

  return (
    <div className = "task" >
        <div>
            <p>Type of Task : {type}</p> 
            <select id = "type" onChange={handleTypeUpdation} defaultValue = {type} value = {type} >
                <option value = "Todo List">Todo List</option>
                <option value = "Meeting Agenda">Meeting Agenda</option>
                <option value = "Project Summary">Project Summary</option>
                <option value = "Workshop Notes">Workshop Notes</option>
                <option value = "Board Annotation">Board Annotation</option>
            </select>
            <hr />
        </div>

        <div>
            <p>Completed : {completed}</p>
            <select id = "completed" onChange={handleCompletedUpdation} defaultValue = {completed} value = {completed} >
                    <option value = "Yes">Yes</option>
                    <option value = "No">No</option>
            </select>
        </div>

        <div>
            <label>Icon : </label>
            <img src = {currentIconPath} alt = {currentIconPath} style = {{"height" : "30px" , "width" : "30px"}}/>
            <input type = "file" onChange={(e) => setIconFile(e.target.files[0])} accept = ".jpg,.png,.jpeg,.jfif" /> 
        </div>

        <div>
            <label>Quadrant : {quadrant}</label> 
            <select id = "quadrant" onChange={handleQuadrantUpdation} defaultValue = {quadrant} value = {quadrant} >
                <option value = "Do First">Do First</option>
                <option value = "Schedule">Schedule</option>
                <option value = "Delegate">Delegate</option>
                <option value = "Eliminate">Eliminate</option>
            </select>
        </div>
        <div>
            <label>Due Date : </label>
            <DateTime dateFormat = {true} timeFormat = {true} initialValue = {initialDue}  onChange={handleDueUpdation} style={{"height" : "20px"}}/>
        </div>
        
        <div>
            <label>Reminder Date : </label>   
            <DateTime dateFormat = {true} timeFormat = {true} onChange={handleReminderUpdation} initialValue={initialReminder} />

        </div>

        <div>
            <label>Attachments : </label>
            <input type ="file" onChange={(e) => setAttachFiles(e.target.files[0])}/>
        </div>

        <div>
            <textarea style = {{"width" : "500px" , "height" : "400px" , "marginLeft" : "0px" }} defaultValue = {content} onChange = {(e) => setTargetContent(e.target.value)} contentEditable = 'True' placeholder='Notes...'/>
        </div>

        
        <button type = "submit" onClick={handleUpdateTask}>Update Task</button>
    </div>
  )
}

export default TaskUpdation
