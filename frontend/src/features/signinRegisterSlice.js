import { createSlice } from "@reduxjs/toolkit";

import {signinRegisterReducer} from './reducers/SigninRegisterReducer';


const initialValue = {
    signed : false
}


export const signinRegisterSlice = createSlice({
    name : 'signinRegister',
    initialState : initialValue,
    reducers : signinRegisterReducer
})


// exporting 
export default signinRegisterSlice.reducer

export const {signinSuccess , signinFail} = signinRegisterSlice.actions