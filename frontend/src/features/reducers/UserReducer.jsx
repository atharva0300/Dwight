

export const UserReducer = {
    setShowUserSettings : (state) => {
        console.log('showing/not showing the userSettings')
        state.showUserSettings = !state.showUserSettings
    }
}

