import React, { useState } from 'react'


// importing actions 
import { useDispatch, useSelector } from 'react-redux'

// importing task thunk
import { getIconImage, updateTask } from '../features/thunks/TaskThunk';

import DateTime from 'react-datetime'
import "react-datetime/css/react-datetime.css";
import { setFetchIcomImage } from '../features/taskSlice';




const TaskUpdation = ({setShowTaskUpdation }) => {
    // defining the variables when the updation is False 
    let [currentIconPath , setCurrentIconPath] = useState()
    let [currentDue , setCurrentDue] = useState()
    let [currentReminder , setCurrentReminder] = useState()
    let [currentCompleted , setCurrentCompleted] = useState()
    let [attachFiles , setAttachFiles ] = useState()
    let [iconFile , setIconFile] = useState()
    let [currentContent , setTargetContent] = useState()

          /*
            taskUUID : '',
            quadrant : '',
            type : '',
            content : '',
            contentInBrief : '',
            iconPath : '',
            attachPath : '',
            reminder : '',
            due : '',
            completed : '',
    */
    // obtain the above fields ( which can be modified ) to populate the from 
    let quadrant = useSelector((state) => state.tasks.quadrant)
    let iconPath = useSelector((state) => state.tasks.iconPath)
    let reminder = useSelector((state) => state.tasks.reminder)
    let due = useSelector((state) => state.tasks.due)
    let completed = useSelector((state) => state.tasks.completed)
    let content = useSelector((state) => state.tasks.content)

    let initialDue = new Date(due)
    let initialReminder = new Date(reminder)
    
    console.log('content : ' , content)
    let fetchIconImage = useSelector((state) => state.tasks.fetchIconImage)

    // useSelector hooks 
    let type = useSelector((state) => state.tasks.type)


    const dispatch = useDispatch()
    if(fetchIconImage){
        dispatch(getIconImage(iconPath))
        console.log('dispatched getIconImage')
        dispatch(setFetchIcomImage(false))
    }
    


    const handleUpdateTask = () => {
        console.log('handling task update')

        const task = {}

        console.log('update task to submit : ' , task)
        console.log('handling task submit')


        // sending the post request 
        // invoking the updateTask thunk
        const response = dispatch(updateTask(task))

        if (response.message==='1'){
            console.log('SUCCESS')
        }else if(response.message==='2'){
            console.log('ERROR')
        }

    }



  return (
    <div className = "task" >
        <div>
            <h4>Type of Task : {type}</h4> 
            <hr />
        </div>

        <div>
            <label>Icon : </label>
            <img src = {currentIconPath} alt = {currentIconPath} style = {{"height" : "30px" , "width" : "30px"}}/>
            <input type = "file" onChange={(e) => setIconFile(e.target.files[0])} accept = ".jpg,.png,.jpeg,.jfif" /> 
        </div>

        <div>
            <label>Quadrant : {quadrant}</label>
        </div>
        <div>
            <label>Due Date : </label>
                <DateTime dateFormat = {true} timeFormat = {true} utc = {true} initialValue = {initialDue}  onChange={(e) => setCurrentDue(e.toDate())} style={{"height" : "20px"}}/>

            
        </div>
        
        <div>
            <label>Reminder Date : </label>   
                <DateTime dateFormat = {true} timeFormat = {true} onChange={(e) => setCurrentReminder(e.toDate())} initialValue={initialReminder} />

            
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
