
// matrixToggleReducer
export const MatrixToggleReducer = {
    // defining the actions for MatrixToggleReducer
    cardOneToggle : (state) => {
        state.cardOne.display = !state.cardOne
        state.cardTwo.display = false
        state.cardThree.display = false
        state.cardFour.display = false
    },

    cardTwoToggle : (state) => {
        state.cardOne.display = false
        state.cardTwo.display = !state.cardTwo
        state.cardThree.display = false
        state.cardFour.display = false
    },

    cardThreeToggle : (state) => {
        state.cardOne.display = false
        state.cardTwo.display = false
        state.cardThree.display = !state.cardThree
        state.cardFour.display = false
    },

    cardFourToggle : (state) => {
        state.cardOne.display = false
        state.cardTwo.display = false
        state.cardThree.display = false
        state.cardFour.display = !state.cardFour
    },
    
    setDisplayCardText : (state , action) => {
        state.displayCardText = action.payload
    },
    
    setShowDisplayCard : (state , action) => {
        console.log('action.payload : ' , action.payload)
        state.showDisplayCard = action.payload
    } 
}