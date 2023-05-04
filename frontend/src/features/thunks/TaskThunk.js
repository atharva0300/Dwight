// task thunk to handle posting the data to the server and get requests 
import React from 'react';


import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'http://127.0.0.1:8000/'


// task thunk
export const addTask = createAsyncThunk(
    'taskSlice/addTask' , async (taskData) => {
        console.log('taskData : ' , taskData)
        const url = BASE_URL + 'tasklist'
        const response = await axios.post(url , taskData)
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
        const response = await axios.get(url)
        console.log(response.data)
        return response?.data
    }
)

/*
export const getAllOneTasks = createAsyncThunk(
    'taskSlice/getAllTasks' , async (taskData) => {
        console.log('taskData : ' , taskData)
        const url = BASE_URL + 'tasklist/'
        const response = await axios.get(url , taskData)
        console.log(response.data)
        return response?.data
    }
)
*/