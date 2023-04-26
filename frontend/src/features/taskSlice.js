import { createSlice } from "@reduxjs/toolkit";
import {addTask} from "./thunks/TaskThunk";




const initialValue = {
    quadrant : '',
    type : '',
    content : '',


    // list of all the tasks
    allTasks : []
}


const taskSlice = createSlice({
    name : 'tasks',
    initialState : initialValue , 
    reducers : {} , extraReducers(builder){
        builder.addCase(addTask.pending , (state , action) => {
            console.log('task adding pending')
        })
        .addCase(addTask.fulfilled , (state , action) => {
            console.log('task creating fulfilled')
            state.quadrant = action.payload.quadrant
            state.type = action.payload.type
            state.content = action.payload.content
        })
        .addCase(addTask.rejected , (state , action) => {
            console.log('task addition failed')
        })
    }
})


// expoerting the reducer and the actions 
export default taskSlice.reducer
