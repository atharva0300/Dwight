import { createSlice } from "@reduxjs/toolkit";

import {SigninReducer} from './reducers/SigninReducer';


const initialValue = {
    signed : true
    // temporarily keeing signed to true while development
    
}


export const signinSlice = createSlice({
    name : 'signin',
    initialState : initialValue,
    reducers : SigninReducer
})


// exporting 
export default signinSlice.reducer

export const {signinSuccess , signinFail} = signinSlice.actions