// creating a redux store 
import { configureStore } from '@reduxjs/toolkit';

import matrixReducer from './features/matrixSlice';
import { signinRegisterSlice } from './features/signinRegisterSlice';


const store = configureStore({
    reducer : {
        matrix : matrixReducer,
        signinRegister : signinRegisterSlice
    }
})

export default store