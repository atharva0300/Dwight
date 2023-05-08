
// TaskReducer
export const TaskReducer = {
    setShowTaskCreation : (state) => {
        console.log('inside setshowTaskCreation')
        state.showTaskCreation = !state.showTaskCreation
        console.log('show Task : ' , state.showTaskCreation)
    },

    setShowTaskUpdation : (state) => {
        console.log('inside the setSHowTaskUpdation')
        state.showTaskUpdation = !state.showTaskUpdation
        console.log('show task update : ' , state.showTaskUpdation)
    },

    setShowTaskTypes : (state , action) => {
        state.showTaskTypes = action.payload
    },

    setShowAllTasks : (state , action) => {
        console.log('inside setShowAllTasks')
        state.showAllTasks = action.payload
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
    },

    populateFields : (state , action) => {
        console.log('populating the form fields')
        /*
            taskUUID : '',
            quadrant : '',
            type : '',
            content : '',
            contentInBrief : '',
            iconPath : '',
            attachPath : '',
            reminder : '',
            due : '',
            completed : '',
    */
        state.due = action.payload.due
        state.reminder = action.payload.reminder
        state.content = action.payload.content
        state.quadrant = action.payload.quadrant
        state.type = action.payload.quadrant
        state.taskUUID = action.payload.taskUUID
        state.iconPath = action.payload.iconPath
        state.completed = action.payload.completed
        
        
    },

    setFetchIcomImage : (state , action) => {
        state.fetchIconImage = action.payload
    }

    
}