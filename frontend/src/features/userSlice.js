import { createSlice } from "@reduxjs/toolkit";

// importing thunks 
import { registerUser , loginUser } from "./thunks/RegisterThunk";

// importing reducers
import { UserReducer } from "./reducers/UserReducer";

const initialValue = {
    username : "",
    status : 'idle',
    // status is idle in the beginning ( before any request has been made )
    message : "",
    userUUID : "",

    userID : '',
    signed : false,

    showUserSettings : false
}


export const userSlice = createSlice({
    name : 'user',
    initialState : initialValue,
    reducers : UserReducer , extraReducers(builder){
        builder.addCase(registerUser.pending , (state , action) => {
            state.status = 'loading'
        })
        .addCase(registerUser.fulfilled , (state , action) => {
            state.message = action.payload.message
        })
        .addCase(registerUser.rejected , (state , action) => {
            state.status = 'failed'
        })
        .addCase(loginUser.pending , (state , action) => {
            state.status = 'loading'
        })
        .addCase(loginUser.fulfilled, (state , action) => {
            state.message = action.payload.message
            state.username = action.payload.username
            console.log('response received, user logged in')
            console.log('action.payload in loginUser : ' , action.payload)
            console.log('action.username : ' , action.payload.username)
            state.userID  = action.payload.userID
            console.log('userID in the loginUser : ' , state.userID)

            state.signed = true
            return true;
        })
    }
})


// exporting 
export default userSlice.reducer

// export const selectAllUsers = (state) => state.userSlice.username
// export const getUserStatus = (state) => state.userSlice.status

export const {setShowUserSettings , setSigned , setUserID} = userSlice.actions
