import React, { useEffect } from 'react'
import { useSelector ,  useDispatch } from 'react-redux'


import { useNavigate } from 'react-router'
import { setSigned } from '../features/userSlice'
import { setShowErrorDiv, setShowSigninPopup } from '../features/signinSlice'

const UserSettings = () => {
    const showUserSettings = useSelector((state) => state.user.showUserSettings)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(showUserSettings)
    } , [showUserSettings])

    const handleSignout = () => {
      dispatch(setSigned(false))
      dispatch(setShowSigninPopup(false))
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

