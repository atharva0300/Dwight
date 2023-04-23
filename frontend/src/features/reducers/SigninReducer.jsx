
// signinReducer
export const SigninReducer = {
    signinSuccess : (state) => {
        state.signed = true
    },

    signinFail : (state) => {
        state.signed = false
    }
}