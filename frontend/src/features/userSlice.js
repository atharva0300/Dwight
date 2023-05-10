import { createSlice } from "@reduxjs/toolkit";

// importing thunks 
import { registerUser , loginUser } from "./thunks/RegisterThunk";

// importing reducers
import { UserReducer } from "./reducers/UserReducer";
import { setShowTaskTypes } from "./taskSlice";


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

export let userID = ''


export const userSlice = createSlice({
    name : 'user',
    initialState : initialValue,
    reducers : UserReducer , extraReducers(builder){
        builder.addCase(registerUser.pending , (state , action) => {
            state.status = 'loading'
        })
        .addCase(registerUser.fulfilled , (state , action) => {
            state.message = action.payload.message
            console.log('state.message : ' , state.message)

        })
        .addCase(registerUser.rejected , (state , action) => {
            state.status = 'failed'
            console.log('user login failed')
            state.signed = false
            state.message = action.payload.message
            console.log('message : ' , state.message)
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
            userID  = action.payload.userID
            console.log('userID in the loginUser : ' , userID)

            state.signed = true
            console.log('signed : ' , state.signed)


        })
    }
})


// exporting 
export default userSlice.reducer

// export const selectAllUsers = (state) => state.userSlice.username
// export const getUserStatus = (state) => state.userSlice.status

export const {setShowUserSettings , setSigned} = userSlice.actions
