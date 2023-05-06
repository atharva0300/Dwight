import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// importing actions 
import {signinFail } from '../features/signinSlice'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router'

const UserSettings = () => {
    const showUserSettings = useSelector((state) => state.user.showUserSettings)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let {logoutUser} = useContext(AuthContext)

    useEffect(() => {
        console.log(showUserSettings)
    } , [showUserSettings])

    const handleSignout = () => {
      navigate("/signin")
      logoutUser()
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

