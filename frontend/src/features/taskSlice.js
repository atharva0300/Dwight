import { createSlice } from "@reduxjs/toolkit";
import {addTask , getAllTasks} from "./thunks/TaskThunk";

import { TaskReducer } from "./reducers/TaskReducer";



const initialValue = {
    quadrant : '',
    type : '',
    content : '',

    showTask : false,
    showAllTasks : false,


    // list of all the tasks
    allTasks : []
}


const taskSlice = createSlice({
    name : 'tasks',
    initialState : initialValue , 
    reducers : TaskReducer , extraReducers(builder){
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
        .addCase(getAllTasks.fulfilled , (state , action) => {
            console.log('got all the tasks')
            for(let i=0;i<action.payload.allTasks.length;i++){
                let item = action.payload.allTasks[i]

                // appending the object in the allTasks 
                
                // appending in allTasks
                state.allTasks = state.allTasks.concat(item)

            }
        })
    }
})


// expoerting the reducer and the actions 
export default taskSlice.reducer

export const { setShowTask , setShowAllTasks } = taskSlice.actions