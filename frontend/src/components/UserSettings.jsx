import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


import { useNavigate } from 'react-router'

const UserSettings = () => {
    const showUserSettings = useSelector((state) => state.user.showUserSettings)
    const navigate = useNavigate()


    useEffect(() => {
        console.log(showUserSettings)
    } , [showUserSettings])

    const handleSignout = () => {
      navigate("/signin")
    
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

