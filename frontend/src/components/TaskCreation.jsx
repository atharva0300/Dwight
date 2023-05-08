import React, { useEffect, useState } from 'react'


// importing actions 
import {  appendCardOneNotes , appendCardTwoNotes , appendCardThreeNotes , appendCardFourNotes} from '../features/noteSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setShowTaskCreation, setShowTaskTypes, setShowTaskUpdation } from '../features/taskSlice'

// importing task thunk
import { addTask } from '../features/thunks/TaskThunk'

import {v4 as uuid } from 'uuid'
import DateTime from 'react-datetime'
import "react-datetime/css/react-datetime.css";



const TaskCreation = ({setShowTaskCreation }) => {
    let [currentType , setCurrentType] = useState()
    let [targetContent , setTargetContent ] = useState()

    let updateTaskBoolean = useSelector((state) => state.tasks.updateTaskBoolean)

    let userID = useSelector((state) => state.user.userID)
    
    let [attachFile , setAttachFile] = useState()
    let [dueDate , setDueDate] = useState()
    let [remDate , setRemDate] = useState()
    let [iconFile , setIconFile] = useState()


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
        }
    } , [renderOnce])


    const handleTaskSubmit = () => {

        
        // creating a uuid
        const unique_uuid = uuid()

        console.log('target content in the task : ' , targetContent)

        let uploadData = new  FormData()
        console.log('userID : ' , userID )

        uploadData.append('user', userID)
        uploadData.append('quadrant' , quadrant)
        uploadData.append('type' , currentType)
        uploadData.append('content' , targetContent)
        uploadData.append('taskUUID' , unique_uuid)
        uploadData.append('due' , dueDate)
        uploadData.append('reminder' , remDate)
        uploadData.append('icon' , iconFile ) 
        uploadData.append('completed' , false)

        console.log('formData : ' , uploadData)




        const task = {
            user : parseInt(userID),
            taskUUID : unique_uuid,
            quadrant : quadrant,
            type : currentType,
            content : targetContent,
            attachfile : attachFile,
            iconFile : iconFile,
            dueDate : dueDate,
            remDate : remDate
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


        // sending the post request 
        // invoking the addTask thunk
        const response = dispatch(addTask(uploadData))

        if (response.message==='1'){
            console.log('SUCCESS')
        }else if(response.message==='2'){
            console.log('ERROR')
        }

        // navigate back to the showTaskTypes pages
        setShowTaskCreation(false)
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



  return (
    <div className = "task" >
        <div>
           <h4>Type of Task : {currentType}</h4>
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
                <DateTime dateFormat = {true} timeFormat = {true} utc = {true} onChange={(e) => setDueDate(e.toDate())} style={{"height" : "20px"}}/>
            
        </div>
        
        <div>
            <label>Reminder Date : </label>
                <DateTime dateFormat = {true} timeFormat = {true} onChange={(e) => setRemDate(e.toDate())} />
            
            
        </div>

        <div>
            <label>Attachments : </label>
            <input type ="file" onChange={AttachmentChangeHandler}/>
        </div>

        <div>
            <textarea style = {{"width" : "500px" , "height" : "400px" , "marginLeft" : "0px" }} onChange = {(e) => setTargetContent(e.target.value)} contentEditable = 'True' placeholder='Notes...'/>
        </div>

        <button type = "submit" onClick={handleTaskSubmit}>Create Task</button>
    </div>
  )
}

export default TaskCreation
