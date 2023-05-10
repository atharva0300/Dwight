import { current } from "@reduxjs/toolkit"

export const SubTaskReducer = {

    setSubTaskCreation : (state , action) => {
        console.log('action.payload : ' , action.payload)
        let currentObj = action.payload
        state.allSubTasks = [...state.allSubTasks , currentObj]
        console.log('after concatenation : ' , state.allSubTasks)
        
    },

    setSubTaskDeletion : (state  , action) => {
        console.log('inside setSubTask Deletion')
        console.log('action.payload : ' , action.payload)
        let subTaskUUID = action.payload
        state.allSubTasks = state.allSubTasks.filter((item) => item.subTaskUUID!==subTaskUUID)
    },

    setSubTaskContent : (state , action) => {
        console.log('action.payload : ' , action.payload)
        // obtain the subTask with the UUID 

        for(let i=0;i<state.allSubTasks.length;i++){
            console.log(state.allSubTasks[i])
        }
        
        
        /*
        let currentSubTask = current(state).allSubTasks.filter((item) => item.subTaskUUID===action.payload.subTaskUUID)
        
        console.log('currentubTask : ' , currentSubTask)

        currentSubTask.subTaskContent = action.payload.updatedText
        state.allSubTasks[action.payload.index] = currentSubTask

        console.log('updaed allsubTasks : ' , current(state.allSubTasks))
        */

        
    }

}