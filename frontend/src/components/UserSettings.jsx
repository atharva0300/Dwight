import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// importing actions 
import {signinFail } from '../features/signinSlice'

const UserSettings = () => {
    const showUserSettings = useSelector((state) => state.user.showUserSettings)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(showUserSettings)
    } , [showUserSettings])

    const handleSignout = () => {
        console.log('hadnling signout')
        dispatch(signinFail())

    }

  return (
    <div>
    {showUserSettings && <div className='user-settings'>
        <div onClick = {handleSignout}><p>Signout</p></div>
        <div><p>Profile</p></div>
        </div>    
    }  
    </div>
  )
}

export default UserSettings

