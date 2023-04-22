import React from 'react'
import NavigationBar from './NavigationBar'
import ToolBar from './ToolBar'
import UserBar from './UserBar'


const TopBar = ({signed , setShowSignin}) => {
  return (
    <div className='topbar'>
      <NavigationBar />
      <ToolBar />
      <UserBar signed = {signed} setShowSignin = {setShowSignin} />
    </div>
  )
}

export default TopBar