import { createSlice } from "@reduxjs/toolkit";
import { SubTaskReducer } from "./reducers/SubTaskReducer";
import { getSubTasks, postSubTasks } from "./thunks/SubTaskThunk";

// importing taskID 
import { taskID } from "./taskSlice";

const initialValue = {
    allSubTasks: [],
    id : 0,
}


const subtaskSlice = createSlice({
    name : 'subtasks',
    initialState : initialValue,
    reducers : SubTaskReducer , extraReducers(builder){
        builder.addCase(postSubTasks.rejected , (state , action) => {
            console.log('posting subTasks rejected')
        })

        .addCase(postSubTasks.fulfilled , (state , action) => {
            console.log('posts subTask fulfilled')
            taskID = false
            
        })

        .addCase(getSubTasks.rejected , (state , action) => {
            console.log('get subTasks rejected')
        })

        .addCase(getSubTasks.fulfilled , (state , action) => {
            console.log('get SubTasks fulfilled')
        })
    }   
})


// default export 
export default subtaskSlice.reducer

// exporting actions 
export const {
        setSubTaskCreation ,
        setSubTaskDeletion,
        setSubTaskContent

    } = subtaskSlice.actions