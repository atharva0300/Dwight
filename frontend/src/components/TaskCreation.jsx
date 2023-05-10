import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'


// importing actions 
import { useDispatch, useSelector } from 'react-redux'
import { setDue, setFetchSubTasks, setReminder, setShowTaskCreation, setShowTaskTypes, setShowTaskUpdation } from '../features/taskSlice'

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
import { postSubTasks } from '../features/thunks/SubTaskThunk'

// importing taskID 
import { taskID } from '../features/taskSlice'

const TaskCreation = ({setShowTaskCreation }) => {
    let [targetContent , setTargetContent ] = useState()


    // let userID = useSelector((state) => state.user.userID)
    
    let [attachFile , setAttachFile] = useState()
    let [iconFile , setIconFile] = useState()
    let [allSubTasks , setAllSubTasks] = useState([])

    // useSelector hooks 
    let type = useSelector((state) => state.tasks.type)
    let quadrant = useSelector((state) => state.tasks.quadrant)
    let due = useSelector((state) => state.tasks.due)
    let reminder = useSelector((state) => state.tasks.reminder)

    let taskCreationSuccess =  useSelector((state) => state.tasks.taskCreationSuccess)

    let signed = useSelector((state) => state.signin.signed)


    const dispatch = useDispatch()

    dispatch(setFetchSubTasks(false))


    const handleTaskSubmit = () => {


        console.log('target content in the task : ' , targetContent)

        let uploadData = new  FormData()
        console.log('signed : ' , signed)
        if(userID!==""){
            console.log('userID : ' , userID )
        }   
        
        // endcoding the image 
        const encodedImage = base64_encode(iconFile)
        console.log('encodedImage : ' , encodedImage)

        // creating a uuid 
        const taskUUID = uuid()


        uploadData.append('user', userID)
        uploadData.append('quadrant' , quadrant)
        uploadData.append('type' , type)
        uploadData.append('content' , targetContent)
        uploadData.append('taskUUID' , taskUUID )
        uploadData.append('due' , String(due))
        uploadData.append('reminder' , String(reminder))
        if(iconFile){
            uploadData.append('icon' , iconFile , iconFile.name ) 
        }else if(!iconFile){
            // creating an empty blob and appending into the formData
            let blob = new Blob([] , {type : 'file/image'})
            uploadData.append('icon' , blob , blob.name)
        }
        uploadData.append('completed' , "No")

        let uploadData2 = new FormData()

        uploadData2.append('allSubTasks' , allSubTasks)

        console.log('uploadData : ' , uploadData)
        console.log('uploadData 2 : ' , uploadData2)

        // sending the post request 
        // invoking the addTask thunk
        const item = {
            uploadData : uploadData,
            allSubTasks : allSubTasks
        }
        dispatch(addTask(item))

        
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

        <SubTasks allSubTasks={allSubTasks} setAllSubTasks={setAllSubTasks} />



        <div>
            <textarea style = {{"width" : "500px" , "height" : "400px" , "marginLeft" : "0px" }} onChange = {(e) => setTargetContent(e.target.value)} contentEditable = 'True' placeholder='Notes...'/>
        </div>

        

        <button type = "submit" onClick={handleTaskSubmit}>Create Task</button>
    </div>
  )
}

export default TaskCreation
