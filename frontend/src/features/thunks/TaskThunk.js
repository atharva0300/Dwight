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
        const url = BASE_URL + `updatetask?taskUUID=${taskUUID}&user=${userID}`
        console.log('url : ' , url)
        const response =  await axios.get(url)
        console.log(response.data)
        return response?.data
    }
)

export const updateTask = createAsyncThunk(
    'taskSlice/updateTask' , async (taskData) => {
        console.log('taskData : ' , taskData)
        const url = BASE_URL + 'updatetask'
        console.log('url : ' , url)
        const response = await axios.post(url , taskData)
        console.log(response.data)
        return response?.data
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
