import React from 'react'
import NavigationBar from './NavigationBar'
import ToolBar from './ToolBar'
import UserBar from './UserBar'


const TopBar = () => {
  return (
    <div className='topbar'>
      <NavigationBar />
      <ToolBar />
      <UserBar />
    </div>
  )
}

export default TopBar