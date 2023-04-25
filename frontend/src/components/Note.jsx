import React, { useState } from 'react'
import Draggable from 'react-draggable';
import NoteToolBar from './NoteToolBar';
import ResizingGrid from './ResizingGrid';

const Note = ({content , type , card , classname }) => {

    let [noteFeatures , toggleNoteFeatures] = useState(false)
    let [text , setText] = useState()
    let [showInputEle , setShowInputEle] = useState(false)

    const handleOnDrag = () => {
        console.log('handling on drag')
        toggleNoteFeatures(false)
    }

    const handleOnDoubleClick = () => {
        setShowInputEle(true)
        console.log('handling double click')
    
    }


    const handleBlur = (e) => {
        setShowInputEle(false)
        console.log('handling blur')
    }

  return (  
    <Draggable
        onDrag={handleOnDrag}
        className = 'draggable'
        >

        <div style={{"width" : "50px" , "height" : "50px"}} >
            <div type = "text" onDoubleClick={handleOnDoubleClick} value = {text} onBlur={handleBlur} 
                style ={{"width" : "50px" , "height" : "50px"}}
                className = {`${classname} note-container`}
            />
            {showInputEle && <NoteToolBar />}
            {showInputEle && <ResizingGrid />}
        </div>

      </Draggable>
  )
}

export default Note
