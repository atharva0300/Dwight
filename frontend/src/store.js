// creating a redux store 
import { configureStore } from '@reduxjs/toolkit';

import matrixReducer from './features/matrixSlice';
import noteReducer from './features/noteSlice';
import userReducer from './features/userSlice';
import taskReducer from './features/taskSlice';
import SigninReducer from './features/signinSlice';
import subtaskReducer from './features/subtaskSlice';


const store = configureStore({
    reducer : {
        signin : SigninReducer,
        matrix : matrixReducer,
        notes : noteReducer,
        user : userReducer, 
        tasks : taskReducer,
        subtasks : subtaskReducer
    }
})

export default store