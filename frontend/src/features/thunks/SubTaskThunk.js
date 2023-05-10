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
        let allSubTasks = item['allSubTasks']
        let taskID = item['taskID']
        console.log('subTasks : ' , allSubTasks)
        console.log('taskID : ' , taskID)
        
        for(let i=0;i<allSubTasks.length;i++){
            // send a post request for every subtask 
            const url = BASE_URL + 'subtask'
            console.log('url : ' , url)
            
            // appending the taskUUID in the object 
            allSubTasks[i]['task'] = taskID
            console.log('posting the subTask : ' , allSubTasks[i])
            const response = await axios.post(url , allSubTasks[i])
            console.log(response.data)
            return response?.data
        }
    }
)