import { createSlice } from "@reduxjs/toolkit";

// importing thunks 
import { registerUser , loginUser } from "./thunks/RegisterThunk";

const initialValue = {
    username : "",
    status : 'idle',
    // status is idle in the beginning ( before any request has been made )
    message : ""
}


export const userSlice = createSlice({
    name : 'user',
    initialState : initialValue,
    reducers : {} , extraReducers(builder){
        builder.addCase(registerUser.pending , (state , action) => {
            state.status = 'loading'
        })
        .addCase(registerUser.fulfilled , (state , action) => {
            state.message = action.message
        })
        .addCase(registerUser.rejected , (state , action) => {
            state.status = 'failed'
        })
        .addCase(loginUser.pending , (state , action) => {
            state.status = 'loading'
        })
        .addCase(loginUser.fulfilled, (state , action) => {
            state.message = action.message
        })
    }
})


// exporting 
export default userSlice.reducer

export const selectAllUsers = (state) => state.userSlice.username
export const getUserStatus = (state) => state.userSlice.status