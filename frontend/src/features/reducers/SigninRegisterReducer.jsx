import React from "react";


export const SigninRegisterReducer = {
    signinSuccess : (state) => {
        state.signed = true
    },

    signinFail : (state) => {
        state.signed = false
    }
}