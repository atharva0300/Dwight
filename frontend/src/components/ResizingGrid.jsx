import React from 'react'

import resize from '../assets/resize.png'

const ResizingGrid = () => {

    

    const handleResizeClick = (e) => {
        console.log(e.clientX)
        console.log(e.clientY)
        console.log('inside handle resize click')
    }


  return (
    <div onClick={handleResizeClick} style = {{"background" : "blue" , "width" : "30px",  "height" : "30px" , "position" : "relative" , "margin-left" : "100px"}}>
    <img src = {resize} style = {{"width" : "24px",  "height" : "24px" ,  "left" : "100px" , "top" : "100px" , "transform" : "rotate(90deg)"}}
      alt = "resize"
    />
    </div>
  )
}

export default ResizingGrid
