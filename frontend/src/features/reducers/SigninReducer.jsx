

export const SigninReducer = {
    setShowSignupPopup : (state , action) => {
        state.showSignupPopup = action.payload
    },

    setShowSigninPopup : (state , action) => {
        state.showSigninPopup = action.payload
    },

    setShowDuplicatePopup : (state , action) => {
        state.showDuplicatePopup = action.payload
    },

    setShowSuccessDiv : (state , action) => {
        state.showSuccessDiv = action.payload
    },

    setShowErrorDiv : (state , action) => {
        state.showErrorDiv = action.payload
    },

    signUpOne : (state) => {
        state.setShowSignupPopup = true
        state.setShowSuccessDiv = true
        state.setShowErrorDiv = false
    },

    signUpTwo : (state) => {
        state.setShowSignupPopup = false
    },

    signUpThree : (state) => {
      state.setShowErrorDiv = false
      state.setShowSigninPopup = false
      state.setShowSuccessDiv =  false
      state.setShowDuplicatePopup = true
      state.setShowSignupPopup = true
    }
}