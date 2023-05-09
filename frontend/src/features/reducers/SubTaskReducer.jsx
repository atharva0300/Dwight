

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

}