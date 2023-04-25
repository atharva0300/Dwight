
// NotesReducer
export const NotesReducer = {
    // defining the actions for the NotesReducer
    appendCardOneNotes: (state , action) => {
        console.log('appending the note card one ')
        const currentNote = {
            'content' : action.payload.content,
            'type' : action.payload.type,
            'card' : 'one'
        }

        // appending into the cardOneNotes 
        state.cardOneNotes = state.cardOneNotes.concat(currentNote)
    },

    appendCardTwoNotes : (state , action) => {
        console.log('appending the note card two')
        const currentNote = {
            'content' : action.payload.content,
            'type' : action.payload.type,
            'card' : 'two'
        }

        // appending into the cardTwoNotes 
        state.cardTwoNotes = state.cardTwoNotes.concat(currentNote)
    },

    appendCardThreeNotes : (state , action) => {
        console.log('appending the note card three')
        const currentNote = {
            'content' : action.payload.content,
            'type' : action.payload.type,
            'card' : 'three'
        }

        // appending into the cardTwoNotes 
        state.cardThreeNotes = state.cardThreeNotes.concat(currentNote)
    },

    appendCardFourNotes : (state , action) => {
        console.log('appending the note card four')
        const currentNote = {
            'content' : action.payload.content,
            'type' : action.payload.type,
            'card' : 'four'
        }

        // appending into the cardTwoNotes 
        state.cardFourNotes = state.cardFourNotes.concat(currentNote)
    }
}