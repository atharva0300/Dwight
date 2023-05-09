// task thunk to handle posting the data to the server and get requests 
import React, { useContext, useEffect } from 'react';


import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://127.0.0.1:8000/'




// task thunk
export const addTask = createAsyncThunk(
    'taskSlice/addTask' , async (taskData) => {

        console.log('taskData : ' , taskData)
        const url = BASE_URL + 'tasklist'
        const response = axios.post(url , taskData)

        /*
        axios({
            method: 'post',
            url: url,
            data: taskData,
            headers: { 'Content-Type': 'multipart/form-data' },
        }).then((response) => {
            console.log(response)
            return response?.data   
        })
        
        .catch((err) => console.log(err));
        
        */
        /*
        const response = await (url , {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer' + String(authTokens.access)
            },
            body : taskData
        } )
        */
    }
)

export const getAllTasks = createAsyncThunk(
    'taskSlice/getAllTasks' , async (item) => {

        console.log('taskData : ' , item)
        let quadrant = item['quadrant']
        const url = BASE_URL + `tasklist?quadrant=${quadrant}`
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
        const url = BASE_URL + `updatetask?taskUUID=${taskUUID}`
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
