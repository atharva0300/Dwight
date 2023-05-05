

// NotesReducer
export const NotesReducer = {
    // defining the actions for the NotesReducer
    appendCardOneNotes: (state , action) => {
        console.log('appending the note card one ')
        const currentNote = {
            'content' : action.payload.content,
            'type' : action.payload.type,
            'card' : 'one',
            'uuid' : action.payload.uuid
        }

        // appending into the cardOneNotes 
        state.cardOneNotes = state.cardOneNotes.concat(currentNote)
    },

    appendCardTwoNotes : (state , action) => {
        console.log('appending the note card two')
        const currentNote = {
            'content' : action.payload.content,
            'type' : action.payload.type,
            'card' : 'two',
            'uuid' : action.payload.uuid
        }

        // appending into the cardTwoNotes 
        state.cardTwoNotes = state.cardTwoNotes.concat(currentNote)
    },

    appendCardThreeNotes : (state , action) => {
        console.log('appending the note card three')
        const currentNote = {
            'content' : action.payload.content,
            'type' : action.payload.type,
            'card' : 'three',
            'uuid' : action.payload.uuid
        }

        // appending into the cardTwoNotes 
        state.cardThreeNotes = state.cardThreeNotes.concat(currentNote)
    },

    appendCardFourNotes : (state , action) => {
        console.log('appending the note card four')
        const currentNote = {
            'content' : action.payload.content,
            'type' : action.payload.type,
            'card' : 'four',
            'uuid' : action.payload.uuid
        }

        // appending into the cardTwoNotes 
        state.cardFourNotes = state.cardFourNotes.concat(currentNote)
    },

    deleteNote : (state , action) => {
        console.log('deleting the note')
        console.log('action.payload in the deleteNote : ' , action.payload)
        const quadrant = action.payload['quadrant']
        const uuid = action.payload['uuid']
        console.log('quadrant : ' , quadrant)
        console.log('uuid : ' , uuid )


        if(quadrant==='one'){
            state.cardOneNotes = state.cardOneNotes.filter((note) => note.uuid!==uuid)
            console.log('updated card note : ' , state.cardOneNotes)
        }else if(quadrant==='two'){
            state.cardTwoNotes = state.cardTwoNotes.filter((note) => note.uuid!==uuid)
            console.log('updated card note : ' , state.cardTwoNotes)
        }else if(quadrant==='three'){
            state.cardThreeNotes = state.cardThreeNotes.filter((note) => note.uuid!==uuid)
            console.log('updated card note : ' , state.cardThreeNotes)
        }else if(quadrant==='four'){
            state.cardFourNotes = state.cardFourNotes.filter((note) => note.uuid!==uuid)
            console.log('updated card note : ' , state.cardFourNotes)
        }
    }
}