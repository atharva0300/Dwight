import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'


const BASE_URL = 'http://127.0.0.1:8000/'


export const getSubTasks = createAsyncThunk(
    'subtaskSlice/getSubTasks' , async (item) => {
        console.log('item : ' , item)
        let taskUUID = item['taskUUID']
        const url = BASE_URL + `subtask?taskUUID=${taskUUID}`
        console.log('url : ' , url)
        const response = await axios.get(url)
        console.log(response.data)
        return response?.data
    }
)

export const postSubTasks = createAsyncThunk(
    'subtaskSlice/postSubTasks' , async (item) =>{
        console.log('item : ' , item)
        const url = BASE_URL + 'subtask'
        console.log('url : ' , url)
        const response = await axios.post(url , item)
        console.log(response.data)
        return response?.data
    }
)