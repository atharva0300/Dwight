import React from 'react'
import TopBar from '../components/TopBar'
import SideBar from '../components/SideBar'
import Board from '../components/Board'
import BottomBar from '../components/BottomBar'

const WhiteBoard = () => {
  return (
    <div>
        <TopBar />
        <SideBar />
        <Board />
        <BottomBar />
  </div>
  )
}

export default WhiteBoard
