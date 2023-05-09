import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'


// importing actions 
import { useDispatch, useSelector } from 'react-redux'
import { setDue, setReminder, setShowTaskCreation, setShowTaskTypes, setShowTaskUpdation } from '../features/taskSlice'

// importing task thunk
import { addTask } from '../features/thunks/TaskThunk'

import { userID } from '../features/userSlice'

import {v4 as uuid } from 'uuid'
import DateTime from 'react-datetime'
import "react-datetime/css/react-datetime.css";

// improting images 
import plus from '../assets/plus.png'
import minus from '../assets/minus.png'

// importing buffer libraries 
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import SubTasks from './SubTasks'



const TaskCreation = ({setShowTaskCreation }) => {
    let [targetContent , setTargetContent ] = useState()


    // let userID = useSelector((state) => state.user.userID)
    
    let [attachFile , setAttachFile] = useState()
    let [iconFile , setIconFile] = useState()

    // useSelector hooks 
    let type = useSelector((state) => state.tasks.type)
    let quadrant = useSelector((state) => state.tasks.quadrant)
    let due = useSelector((state) => state.tasks.due)
    let reminder = useSelector((state) => state.tasks.reminder)

    let taskCreationSuccess =  useSelector((state) => state.tasks.taskCreationSuccess)

    let signed = useSelector((state) => state.signin.signed)


    const dispatch = useDispatch()


    const handleTaskSubmit = () => {

        
        // creating a uuid
        const unique_uuid = uuid()

        console.log('target content in the task : ' , targetContent)

        let uploadData = new  FormData()
        console.log('signed : ' , signed)
        if(userID!==""){
            console.log('userID : ' , userID )
        }   
        
        // endcoding the image 
        const encodedImage = base64_encode(iconFile)
        console.log('encodedImage : ' , encodedImage)


        uploadData.append('user', userID)
        uploadData.append('quadrant' , quadrant)
        uploadData.append('type' , type)
        uploadData.append('content' , targetContent)
        uploadData.append('taskUUID' , unique_uuid)
        uploadData.append('due' , due)
        uploadData.append('reminder' , reminder)
        uploadData.append('icon' , iconFile , iconFile.name ) 
        uploadData.append('completed' , "No")

        console.log('formData : ' , uploadData)

        // sending the post request 
        // invoking the addTask thunk
        dispatch(addTask(uploadData))

        
        if (taskCreationSuccess==='1'){
            console.log('SUCCESS')
        }else if(taskCreationSuccess==='2'){
            console.log('ERROR')
        }

        // navigate back to the showTaskTypes pages
        dispatch(setShowTaskCreation(false))
        dispatch(setShowTaskUpdation(false))
        dispatch(setShowTaskTypes(true))

        // create a new image in the reactjs application 

        // if the type is Todo List, then post the subTask details as well


        
    }

    

    const AttachmentChangeHandler = (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = () => {
            var blocks = reader.result.split(";");
            const realData = blocks[1].split(",")[1];
            setAttachFile(realData);
        };
        reader.onerror = (error) => console.error(error);
        reader.readAsDataURL(e.target.files[0]);

    }

    const handleDueCreation = (e) => {
        dispatch(setDue(e.toDate()))
    }

    const handleReminderCreation = (e) => {
        dispatch(setReminder(e.toDate()))
    }

    

  return (
    <div className = "task" >
        <div>
           <h4>Type of Task : {type}</h4>
            <hr />
        </div>

        <div>
            <label>Icon : </label>
            <input type = "file" onChange={(e) => setIconFile(e.target.files[0])}/> 
        </div>

        <div>
            <label>Quadrant : {quadrant}</label>
        </div>
        <div>
            <label>Due Date : </label>
                <DateTime dateFormat = {true} timeFormat = {true} utc = {true} onChange={handleDueCreation} style={{"height" : "20px"}}/>
            
        </div>
        
        <div>
            <label>Reminder Date : </label>
                <DateTime dateFormat = {true} timeFormat = {true} onChange={handleReminderCreation} />
            
            
        </div>

        <div>
            <label>Attachments : </label>
            <input type ="file" onChange={AttachmentChangeHandler}/>
        </div>

        <SubTasks />



        <div>
            <textarea style = {{"width" : "500px" , "height" : "400px" , "marginLeft" : "0px" }} onChange = {(e) => setTargetContent(e.target.value)} contentEditable = 'True' placeholder='Notes...'/>
        </div>

        

        <button type = "submit" onClick={handleTaskSubmit}>Create Task</button>
    </div>
  )
}

export default TaskCreation
