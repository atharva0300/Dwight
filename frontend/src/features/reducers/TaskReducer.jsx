
// TaskReducer
export const TaskReducer = {
    setShowTaskCreation : (state , action) => {
        state.showTaskCreation = action.payload
    },

    setShowTaskUpdation : (state, action) => {
        state.showTaskUpdation = action.payload
    },

    setShowTaskTypes : (state , action) => {
        state.showTaskTypes = action.payload
    },

    setShowAllTasks : (state , action) => {
        state.showAllTasks = action.payload
    },

    setUpdateTask : (state , action) => {
        state.updateTaskBoolean = action.payload
    },

    setQuadrant : (state , action ) => {
        state.quadrant = action.payload
    },

    setType : (state , action) => {
        state.type = action.payload
    },

    setContent : (state , action) => {
        console.log('setting the content')
        state.content = action.payload
        console.log('state.content : ' , state.content)
    },

    setTaskListisEmpty : (state , action) => {
        state.taskListEmpty = action.payload
    },
    setFetchIconImage : (state , action) => {
        state.fetchIconImage = action.payload
    },

    setCompleted : (state , action) => {
        state.compeleted = action.payload
    },

    setDue : (state , action) => {
        state.due = action.payload
    },

    setReminder : (state ,action) => {
        state.reminder = action.payload
    },

    setFetchSubTasks : (state , action) => {
        state.fetchSubTasks = action.payload
    }


    
}