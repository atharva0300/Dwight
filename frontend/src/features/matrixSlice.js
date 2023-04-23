// creating matrixSlice 
import { createSlice } from "@reduxjs/toolkit";

import { MatrixToggleReducer } from "./reducers/MatrixToggleReducer";


const initialValue = {
    cardOne : false,
    cardTwo : false,
    cardThree : false,
    cardFour : false
}

export const matrixSlice = createSlice({
    name : 'matrix',
    initialState : initialValue,
    reducers : MatrixToggleReducer
})


// exporting actions and reducer
export const {cardOneToggle , cardTwoToggle , cardThreeToggle , cardFourToggle } = matrixSlice.actions

export default matrixSlice.reducer

