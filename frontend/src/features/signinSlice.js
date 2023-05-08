import { createSlice } from "@reduxjs/toolkit";
import { SigninReducer } from "./reducers/SigninReducer";


let initialValue = {
    showSignupPopup : false,
    showSigninPopup : false,
    showDuplicatePopup : false,
    showSuccessDiv : false,
    showErrorDiv : false,


}


const signinSlice = createSlice({
    name : 'signin',
    initialState : initialValue,
    reducers : SigninReducer
})

export default signinSlice.reducer

// exporting actions 
export const {setShowSignupPopup , setShowSigninPopup , setShowDuplicatePopup , setShowSuccessDiv , setShowErrorDiv , signUpOne , signUpTwo, signUpThree } = signinSlice.actions