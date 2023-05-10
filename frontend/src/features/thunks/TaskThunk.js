// task thunk to handle posting the data to the server and get requests 
import React, { useContext, useEffect } from 'react';


import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://127.0.0.1:8000/'




// task thunk
export const addTask = createAsyncThunk(
    'taskSlice/addTask' , async (item) => {
        let uploadData = item['uploadData']
        let allSubTasks = item['allSubTasks']

        console.log('uploadData : ' , uploadData)
        console.log('allSubTasks : ' , allSubTasks)
        let url = BASE_URL + 'tasklist'
        const response1 = await axios.post(url , uploadData)
        console.log('response1 : ' , response1)

        if(response1.data.taskID){
            const taskID = response1.data.taskID
            console.log('inside the 2nd post call')
            url = BASE_URL + 'subtask'
            for(let i=0;i<allSubTasks.length;i++){
                console.log('posting subtask : ' , i)


                let item = allSubTasks[i]

                // adding the taskID in the item
                item['task'] = taskID
                console.log('subTask : i ' , item )

                // posting
                const response2 = await axios.post(url , item)

                console.log('resonse 2 : ' , response2)
            }
        }
    }
)

export const getAllTasks = createAsyncThunk(
    'taskSlice/getAllTasks' , async (item) => {

        console.log('taskData : ' , item)
        let quadrant = item['quadrant']
        let userID = item['userID']
        const url = BASE_URL + `tasklist?quadrant=${quadrant}&user=${userID}`
        console.log('url : ' , url)
        const response = await axios.get(url )
        console.log(response.data)
        return response?.data
    }
)

export const deleteTask = createAsyncThunk(
    'taskSlice/deleteTask' , async (item) => {
        
        let taskUUID = item['taskUUID']
        const url = BASE_URL + `deletetask?taskUUID=${taskUUID}`
        console.log('url : ' , url)
        const response = await axios.get(url)
        console.log(response.data)
        return response?.data   
    }
)

export const getSingleTask = createAsyncThunk(
    'taskSlice/getSingleTask' , async (item) => {
        console.log('inside getSingleTask thunk')
        let taskUUID = item['taskUUID']
        let userID = item['userID']
        let url = BASE_URL + `updatetask?taskUUID=${taskUUID}&user=${userID}`
        console.log('url : ' , url)

        // fetching all the tasks 
        const response1 =  await axios.get(url)


        console.log(response1.data)
        console.log('task.id : ' ,response1.data.id)

        if(response1.data.id){
            const taskID = response1.data.id
            // fethcing all the subTasks
            url = BASE_URL + `updatesubtask?task=${taskID}`
            const response2 = await axios.get(url)

            console.log('response 2 : ' , response2.data)

            const responseData = {
                taskData : response1?.data,
                subTaskData : response2?.data
            }

            return responseData
        }

    }
)

export const updateTask = createAsyncThunk(
    'taskSlice/updateTask' , async (item) => {
        console.log('item : ' , item)
        let taskData = item['taskData']
        console.log('taskData : ' , taskData)

        let subTaskData = item['subTaskData']
        console.log('subTaskData : ' , subTaskData)


        let url = BASE_URL + 'updatetask'
        console.log('url : ' , url)

        // posting the taskData
        const response1 = await axios.post(url , taskData)

        console.log('response1?.data : ' , response1?.data)

        let response2 = ''

        if(response1?.data.id){
            console.log('posting the subTasks')
            url = BASE_URL + 'updatesubtask'
            console.log('url : ' , url)
            
            // subTaskData is an array, so for each and every subTask, we will have to send individual requests 
            console.log('subTask Data length : ' , subTaskData.length)

            for(let i=0;i<subTaskData.length;i++){
                console.log('posting the subTask : ' , subTaskData[i])
                subTaskData[i]['task'] = response1?.data.id 
                response2 = await axios.post(url , subTaskData[i])

                console.log('response 2 : ' , response2.data)
            }


            const responseData = {
                taskResponse : response1?.data,
                subTaskResponse : response2?.data
            }

            return responseData
        }

    }
)

export const getIconImage = createAsyncThunk(
    'taskSlice/getIconImage' , (item) => {
        console.log('iconPath in thunk : ' , item['iconPath'])
        console.log('taskUUID : ' , item['tasUUID'])
        const url = BASE_URL + `iconImage?iconPath=${item['iconPath']}&taskUUID=${item['taskUUID']}`
        console.log('url : ' , url)
        const response = axios.get(url)
        console.log(response.data)
        return response?.data
    }
)

export const getAttachments = createAsyncThunk(
    'taskSlice/getAttachments' , async (filePath) => {
        console.log('filePath : ' , filePath)
        const url = BASE_URL + `attachments?filePath=${filePath}`
        console.log('url : ' , url)
        const response = await axios.get(url)
        console.log(response.data)
        return response?.data
    }
)
