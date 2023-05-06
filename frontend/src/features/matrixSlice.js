// creating matrixSlice 
import { createSlice } from "@reduxjs/toolkit";

import { MatrixToggleReducer } from "./reducers/MatrixToggleReducer";


const initialValue = {
    cardOne : {
        'display' : false,
    },
    cardTwo : {
        'display' : false,
    },
    cardThree : {
        'display' : false,
    },
    cardFour : {
        'display' : false,
    },

    displayCardText : "",
    showDisplayCard : false,
}

export const matrixSlice = createSlice({
    name : 'matrix',
    initialState : initialValue,
    reducers : MatrixToggleReducer
})


// exporting actions and reducer
export const {cardOneToggle , cardTwoToggle , cardThreeToggle , cardFourToggle, setDisplayCardText , setShowDisplayCard } = matrixSlice.actions

export default matrixSlice.reducer

