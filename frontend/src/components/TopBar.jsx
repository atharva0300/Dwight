import React from 'react'
import NavigationBar from './NavigationBar'
import ToolBar from './ToolBar'
import UserBar from './UserBar'
import UserSettings from './UserSettings'


const TopBar = () => {
  return (
    <div className='topbar'>
      <NavigationBar />
      <ToolBar />
      <UserBar />
      <UserSettings />
    </div>
  )
}

export default TopBar