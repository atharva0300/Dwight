
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

    
}