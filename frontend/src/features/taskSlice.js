import { createSlice } from "@reduxjs/toolkit";
import {addTask , getAllTasks , deleteTask , getSingleTask, updateTask , getIconImage , getAttachments} from "./thunks/TaskThunk";

import { TaskReducer } from "./reducers/TaskReducer";

// importing buffer libraries 
import {decode as base64_decode, encode as base64_encode} from 'base-64';


export let taskID = false
export let allSubTasks = []

const initialValue = {
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
    taskID : false,

    showTaskCreation : false,
    showTaskUpdation : false,
    showAllTasks : false,
    updateTaskBoolean : false,
    obtainIconImage : false,
    showTaskTypes : false,

    fetchIconImage : false,
    taskListEmpty : false,
    taskCreationSuccess : false,
    taskUpdationSuccess : false,
    fetchSubTasks : false,

    // list of all the tasks
    allTasks : [],

}


const taskSlice = createSlice({
    name : 'tasks',
    initialState : initialValue , 
    reducers : TaskReducer , extraReducers(builder){
        builder.addCase(addTask.pending , (state , action) => {
            console.log('task adding pending')
            console.log(action.payload)
        })
        .addCase(addTask.fulfilled , (state , action) => {
            console.log('task creating fulfilled')
            console.log('action.payload : ')
            console.log(action.payload)
            state.taskCreationSuccess = '1'

            // setting the fetchSubTasks to true 
            state.fetchSubTasks = true

            // obtaining the task id
            taskID = action.payload.taskID
            console.log('received taskID : ' , taskID )
            
        })
        .addCase(addTask.rejected , (state , action) => {
            console.log('task addition failed')
            state.taskCreationSuccess = '2'
        })
        .addCase(getAllTasks.fulfilled , (state , action) => {
            console.log('got all the tasks')
            console.log('paylaod tasks length : ' , action.payload.allTasks.length)


            // initializign the allTasks to empty list 
            // otherwise duplicate tasks will be added into the list 
            state.allTasks = []
            
            for(let i=0;i<action.payload.allTasks.length;i++){

                // creating a breif content for all the tasks 
                console.log('the string : ' , action.payload.allTasks[i].content)
                state.contentInBrief = action.payload.allTasks[i].content.substring(0,55) + ' ...'

                // adding the content in brif into the allTasks
                action.payload.allTasks[i]['contentInBrief'] = state.contentInBrief

                // obtainiong the modified allTasks list
                let item = action.payload.allTasks[i]

                console.log('allTasks[i] : ' , item)

                // appending in allTasks
                state.allTasks = state.allTasks.concat(item)

            }
        })
        .addCase(deleteTask.fulfilled , (state  , action) => {
            console.log('task deletion successfull')
        })
        .addCase(getSingleTask.fulfilled , (state , action) => {
            console.log('task has been found and the taskDetails have been sent')
            console.log('action.payload : ', action.payload)

            // fill the quadrant, uuid, content here
            
            
            console.log('after updation')

            state.taskUUID = action.payload.taskData.taskUUID
            state.quadrant = action.payload.taskData.quadrant
            state.type = action.payload.taskData.type
            state.content = action.payload.taskData.content
            state.iconPath = action.payload.taskData.icon
            state.due = action.payload.taskData.due
            state.reminder = action.payload.taskData.reminder
            state.completed = action.payload.taskData.completed

            state.fetchIconImage = true

            // populating hte allSubTasks list
            allSubTasks = action.payload.subTaskData

            console.log('allSubTasks Data : ' , allSubTasks)
            

            
        })
        .addCase(updateTask.rejected , (state , action) => {
            console.log('taskUpdation failed')
            state.taskUpdationSuccess = '2'
        })

        .addCase(updateTask.fulfilled , (state , action) => {
            console.log('tasks updated successfully')
            state.taskUpdationSuccess = '1'



        })
        .addCase(getIconImage.fulfilled , (state , action) => {
            console.log('inside getIconImage.fulfilled')
            console.log('action.payload in getIconImage : ' , action.payload)

            let imageDecoded = base64_decode(action.payload.iconObj)
            console.log('imageDecoded : ' , imageDecoded)

        })
        
    }
})


// expoerting the reducer and the actions 
export default taskSlice.reducer

export const { setShowAllTasks , 
                setUpdateTask , 
                setQuadrant , 
                setType , 
                setContent , 
                setTaskListisEmpty , 
                setShowTaskCreation , 
                setShowTaskUpdation , 
                setShowTaskTypes , 
                setFetchIconImage,
                setCompleted,
                setDue,
                setReminder,
                setFetchSubTasks
            } = taskSlice.actions