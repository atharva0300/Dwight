
// NotesReducer
export const NotesReducer = {
    // defining the actions for the NotesReducer
    appendNote : (state, action) => {
        console.log('appending the note')
        console.log('action : ' , action)
        console.log('action.payload : ' , action.payload)
        state.note.content = action.payload.content
        state.note.type = action.payload.type

        // creaitng a note object
        const currentNote = {
            'content' : action.payload.content,
            'type' : action.payload.type
        }   


        // appending into the allNotes list 
        state.allNotes = state.allNotes.concat(currentNote)
    } 
}