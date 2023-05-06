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
            console.log('action : ' , action)
            console.log('action.username : ' , action.payload.username)

            // obtain the user key value and then store the user in the slice 
            state.userUUID = action.payload.userUUID

            console.log("logged in user : " , state.userUUID)
        })
    }
})


// exporting 
export default userSlice.reducer

// export const selectAllUsers = (state) => state.userSlice.username
// export const getUserStatus = (state) => state.userSlice.status

export const {setShowUserSettings} = userSlice.actions
