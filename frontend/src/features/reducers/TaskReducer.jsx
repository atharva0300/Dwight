
// TaskReducer
export const TaskReducer = {
    setShowTask : (state) => {
        console.log('inside setShowTask')
        state.showTask = !state.showTask
        console.log('show Task : ' , state.showTask)
    },

    setShowAllTasks : (state) => {
        console.log('inside setShowAllTasks')
        state.showAllTasks = !state.showAllTasks
    },

    setUpdateTask : (state , action) => {
        console.log('INSIDE UPDATE TASK')
        state.updateTaskBoolean = action.payload
        console.log('state.updateTask : ' , state.updateTaskBoolean)
    },

    setQuadrant : (state , action ) => {
        console.log('setting the quadrant')
        state.quadrant = action.payload
        console.log('state.quadrant : ' , state.quadrant)
    },

    setType : (state , action) => {
        console.log('setting the type')
        state.type = action.payload
        console.log('state.type : ' , state.type)
    },

    setContent : (state , action) => {
        console.log('setting the content')
        state.content = action.payload
        console.log('state.content : ' , state.content)
    },

    setTaskListisEmpty : (state , action) => {
        state.taskListEmpty = action.payload
    }

    
}