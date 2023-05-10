import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'

// importing utils 
import {v4 as uuid } from 'uuid'


// importing images 
import plus from '../assets/plus.png'
import minus from '../assets/minus.png'
import { useDispatch, useSelector } from 'react-redux'

import { setFetchSubTasks } from '../features/taskSlice'
import { postSubTasks } from '../features/thunks/SubTaskThunk'



const SubTasks = ({allSubTasks , setAllSubTasks}) => {

    // obtain all the subTasks list 
    // let allSubTasks = useSelector((state) => state.subtasks.allSubTasks)
    let fetchSubTasks = useSelector((state) => state.tasks.fetchSubTasks)



    // useState hooks here
    let [content , setContent] = useState()

    const dispatch = useDispatch()
    

    const handleSubTaskCreation = (e) => {
        console.log('handling subtask creation')
        const item = {
            subTaskUUID : uuid(),
            subTaskContent : ''
        }
        setAllSubTasks([...allSubTasks , item])
        console.log('allSubTasks : ' , allSubTasks)

        
    }

    const handleSubTaskDeletion = (e , subTaskUUID) => {
        console.log('subTaskUUID : ' , subTaskUUID)
        console.log('handling subTask deletion')
        // dispatch(setSubTaskDeletion(subTaskUUID))
        setAllSubTasks(allSubTasks.filter((item) => item.subTaskUUID!==subTaskUUID))
    }

    const SubTaskTextChange = (e  , index) => {
        console.log('subTaskText Change')
        console.log('index : ' , index)
        console.log('subTaskUUID : ' , allSubTasks[index].subTaskUUID)
        console.log('suTaskCOntnet before : ',  allSubTasks[index].subTaskContent)

        setContent(e.target.value)

        let temp = allSubTasks
        temp[index].subTaskContent = e.target.value
        setAllSubTasks(temp)

        console.log('allSubTasks after updation : ' , allSubTasks)
    }
    
    
    return (
        <div style = {{"display" : "flex" , "flexDirection" : "column" , "justifyContent" : "center" , "alignItems" : "flex-start" }}>
            <div onClick={handleSubTaskCreation}>
                <label>Add SubTask</label>
                <img src = {plus} alt = "plus" />
            </div>

            {allSubTasks.map((subTask , index) => (
                <div key = {index} id = {index} >
                    <div style = {{"display" : "flex" , "flexDirection" : "row" , "justifyContent" : "flex-start" , "alignItems" : "center"}}>
                        <textarea type = "text" placeholder = "Enter Subtask" defaultValue = {subTask.subTaskContent} value = {subTask.subTaskContent} onChange = {(e) => SubTaskTextChange(e , index)} style = {{"width" : "450px" , "height" : "50px" ,  "marginLeft" : "5px"}}/>
                        <div onClick = {(e) => handleSubTaskDeletion(e , subTask.subTaskUUID)} style = {{"border" : "solid 2px black" , "width" : "30px" , "marginLeft" : "10px"}}>
                            <img src = {minus} alt = "delete"  />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SubTasks
