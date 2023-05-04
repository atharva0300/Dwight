import { createSlice } from "@reduxjs/toolkit";
import {addTask , getAllTasks , deleteTask} from "./thunks/TaskThunk";

import { TaskReducer } from "./reducers/TaskReducer";



const initialValue = {
    uuid : '',
    quadrant : '',
    type : '',
    content : '',
    contentInBrief : '',

    showTask : false,
    showAllTasks : false,


    // list of all the tasks
    allTasks : [],

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
            console.log('paylaod tasks length : ' , action.payload.allTasks.length)


            // initializign the allTasks to empty list 
            // otherwise duplicate tasks will be added into the list 
            state.allTasks = []
            
            for(let i=0;i<action.payload.allTasks.length;i++){

                // creating a breif content for all the tasks 
                console.log('the string : ' , action.payload.allTasks[i].content)
                state.contentInBrief = action.payload.allTasks[i].content.substring(0,55) + '...'

                // adding the content in brif into the allTasks
                action.payload.allTasks[i]['contentInBrief'] = state.contentInBrief

                // obtainiong the modified allTasks list
                let item = action.payload.allTasks[i]

                console.log('allTasks[i] : ' , item)

                // appending in allTasks
                state.allTasks = state.allTasks.concat(item)

            }
        })
        .addCase(deleteTask.fulfilled , (state  , action) => {
            console.log('task deletion successfull')
        })
    }
})


// expoerting the reducer and the actions 
export default taskSlice.reducer

export const { setShowTask , setShowAllTasks } = taskSlice.actions