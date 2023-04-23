// creating a redux store 
import { configureStore } from '@reduxjs/toolkit';

import matrixReducer from './features/matrixSlice';


const store = configureStore({
    reducer : {
        matrix : matrixReducer
    }
})

export default store