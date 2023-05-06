// task thunk to handle posting the data to the server and get requests 
import React, { useContext, useEffect } from 'react';


import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthContext from '../../context/AuthContext';

const BASE_URL = 'http://127.0.0.1:8000/'




// task thunk
export const addTask = createAsyncThunk(
    'taskSlice/addTask' , async (taskData) => {
         // let {authTokens} = useContext(AuthContext)

        console.log('taskData : ' , taskData)
        const url = BASE_URL + 'tasklist'
        const response = axios.post(url , taskData)
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
        console.log(response.data)
        return response?.data
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
        
        let uuid = item['uuid']
        const url = BASE_URL + `deletetask?uuid=${uuid}`
        console.log('url : ' , url)
        const response = await axios.get(url)
        console.log(response.data)
        return response?.data   
    }
)

export const getSingleTask = createAsyncThunk(
    'taskSlice/getSingleTask' , async(item) => {
        let uuid = item['uuid']
        const url = BASE_URL + `updatetask?uuid=${uuid}`
        console.log('url : ' , url)
        const response = await axios.get(url)
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