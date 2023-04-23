
// matrixToggleReducer
export const MatrixToggleReducer = {
    // defining the actions for MatrixToggleReducer
    cardOneToggle : (state) => {
        state.cardOne = !state.cardOne
        state.cardTwo = false
        state.cardThree = false
        state.cardFour = false
    },

    cardTwoToggle : (state) => {
        state.cardOne = false
        state.cardTwo = !state.cardTwo
        state.cardThree = false
        state.cardFour = false
    },

    cardThreeToggle : (state) => {
        state.cardOne = false
        state.cardTwo = false
        state.cardThree = !state.cardThree
        state.cardFour = false
    },

    cardFourToggle : (state) => {
        state.cardOne = false
        state.cardTwo = false
        state.cardThree = false
        state.cardFour = !state.cardFour
    }
}