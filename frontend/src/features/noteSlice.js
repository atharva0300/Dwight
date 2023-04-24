import { createSlice } from "@reduxjs/toolkit";
import { NotesReducer } from "./reducers/NotesReducer";

let initialValue = {
    note :  {
        'content' : '',
        'type' : '',
        // type -> do it, schedule , delegate , eliminate
    },
    allNotes : []

}

const noteSlice = createSlice({
    name : 'notes',
    initialState : initialValue,
    reducers : NotesReducer
})


// exporting 
export default noteSlice.reducer

export const {appendNote} = noteSlice.actions