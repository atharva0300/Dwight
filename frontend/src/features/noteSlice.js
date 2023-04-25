import { createSlice } from "@reduxjs/toolkit";
import { NotesReducer } from "./reducers/NotesReducer";

let initialValue = {
    note :  {
        'content' : '',
        'type' : '',
        // type -> do it, schedule , delegate , eliminate
        'card' : ''
        // card -> one , two, three or four
    },
    cardOneNotes : [] ,
    cardTwoNotes : [],
    cardThreeNotes : [],
    cardFourNotes : []
}

const noteSlice = createSlice({
    name : 'notes',
    initialState : initialValue,
    reducers : NotesReducer
})


// exporting 
export default noteSlice.reducer

export const {appendNote , appendCardOneNotes , appendCardTwoNotes , appendCardThreeNotes , appendCardFourNotes} = noteSlice.actions