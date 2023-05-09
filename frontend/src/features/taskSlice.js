import { createSlice } from "@reduxjs/toolkit";
import {addTask , getAllTasks , deleteTask , getSingleTask, updateTask , getIconImage , getAttachments, getSubTasks, postSubTasks} from "./thunks/TaskThunk";

import { TaskReducer } from "./reducers/TaskReducer";

// importing buffer libraries 
import {decode as base64_decode, encode as base64_encode} from 'base-64';


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
    allSubTasks : []

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
            
           if(action.payload.taskDetails[0]!== undefined || action.payload.taskDetails[0]!=={}){
                console.log('action.payload is not underfined or {}, setting the state')

                state.taskUUID = action.payload.taskDetails[0].taskUUID
                state.quadrant = action.payload.taskDetails[0].quadrant
                state.type = action.payload.taskDetails[0].type
                state.content = action.payload.taskDetails[0].content
                state.iconPath = action.payload.taskDetails[0].icon
                state.due = action.payload.taskDetails[0].due
                state.reminder = action.payload.taskDetails[0].reminder
                state.completed = action.payload.taskDetails[0].completed

                state.fetchIconImage = true
           }


            
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

        .addCase(getSubTasks.rejected , (state , action) => {
            console.log('getSubTasks rejected')
        })

        .addCase(getSubTasks.fulfilled , (state , action) => {
            console.log('getSUbTasks fulfilled')
            console.log('action.payload : ' , action.payload)
        })

        .addCase(postSubTasks.rejected , (state ,action) =>{
            console.log('postSubTask rejected')
        })

        .addCase(postSubTasks.fulfilled , (state , action) => {
            console.log('postSubTask fulfilled')
            console.log('action.payload : ' , action.payload)
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
                setFetchIcomImage,
                setCompleted,
                setDue,
                setReminder,
                setFetchSubTasks
            } = taskSlice.actions