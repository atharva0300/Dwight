

export const UserReducer = {
    setShowUserSettings : (state) => {
        console.log('showing/not showing the userSettings')
        state.showUserSettings = !state.showUserSettings
    },

    setSigned : (state , action) => {
        state.signed = action.payload
    },

}

