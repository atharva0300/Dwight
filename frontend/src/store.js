// creating a redux store 
import { configureStore } from '@reduxjs/toolkit';

import matrixReducer from './features/matrixSlice';
import signinReducer from './features/signinSlice';
import noteReducer from './features/noteSlice';
import userReducer from './features/userSlice';
import taskReducer from './features/taskSlice';


const store = configureStore({
    reducer : {
        matrix : matrixReducer,
        signin : signinReducer,
        notes : noteReducer,
        user : userReducer, 
        tasks : taskReducer
    }
})

export default store