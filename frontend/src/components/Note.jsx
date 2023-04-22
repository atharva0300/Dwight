import React, { useState } from 'react'
import Draggable from 'react-draggable';
import NoteToolBar from './NoteToolBar';
import ResizingGrid from './ResizingGrid';

const Note = () => {

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

    const handleChange = (e) => {
        setText(e.target.value)
        console.log('handling on change')
    }

    const handleBlur = (e) => {
        setShowInputEle(false)
        console.log('handling blur')
    }

  return (  
    <Draggable
        onDrag={handleOnDrag}
        >

        <div style={{"width" : "100px" , "height" : "100px"}} >
            <textarea autoFocus className = "note-container" type = "text" onDoubleClick={handleOnDoubleClick} value = {text} onChange={handleChange} onBlur={handleBlur} 
                style ={{"width" : "130px" , "white-space" : "pre-wrap" , "word-wrap" : "break-word"}}
            />
            {showInputEle && <NoteToolBar />}
            {showInputEle && <ResizingGrid />}
        </div>

      </Draggable>
  )
}

export default Note
