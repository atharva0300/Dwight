// creating a redux store 
import { configureStore } from '@reduxjs/toolkit';

import matrixReducer from './features/matrixSlice';
import signinReducer from './features/signinSlice';
import noteReducer from './features/noteSlice';


const store = configureStore({
    reducer : {
        matrix : matrixReducer,
        signin : signinReducer,
        notes : noteReducer
    }
})

export default store