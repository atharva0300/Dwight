// creating a redux store 
import { configureStore } from '@reduxjs/toolkit';

import matrixReducer from './features/matrixSlice';
import signinSlice from './features/signinSlice';


const store = configureStore({
    reducer : {
        matrix : matrixReducer,
        signin : signinSlice
    }
})

export default store