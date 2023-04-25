import React, { useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';
import Note from './Note';
import { useDispatch, useSelector } from 'react-redux';

// importing actions and our matrix reducer 
import { cardOneToggle , cardTwoToggle , cardThreeToggle , cardFourToggle } from '../features/matrixSlice';
import TasksDetail from './TasksDetail';

import {motion} from 'framer-motion'


const Matrix = () => {
    
    let tasks = [1,2,3]
    let number = 3

    const cardOne = useSelector((state) => state.matrix.cardOne)
    const cardTwo = useSelector((state) => state.matrix.cardTwo)
    const cardThree = useSelector((state) => state.matrix.cardThree)
    const cardFour = useSelector((state) => state.matrix.cardFour)

    const allCardOnes = useSelector((state) => state.notes.cardOne)

    const cardOneNotes = useSelector((state) => state.notes.cardOneNotes)
    const cardTwoNotes = useSelector((state) => state.notes.cardTwoNotes)
    const cardThreeNotes = useSelector((state) => state.notes.cardThreeNotes)
    const cardFourNotes = useSelector((state) => state.notes.cardFourNotes)

    const dispatch = useDispatch()

    let [displayCard , setDisplayCard] = useState("")
    let [showDisplayCard  , setShowDisplayCard] = useState(false)
    let [moveXDistance , setXDistance] = useState({})
    let [currentCardType , setCurrentCardType] = useState()    


    useEffect(() => {
        if(showDisplayCard===false){
            setXDistance(0)
        }
    } , [showDisplayCard])


    const handleDistance = () => {
        setShowDisplayCard(true)
        setXDistance(-100)
    }

    const createComponent = (e) => {
        console.log('creating a component')
        console.log(e.target.childNodes)

    }

    const handleCardDetails = (cardType) => {
        console.log('cardType : ' , cardType)
        setCurrentCardType(cardType)
        switch(cardType){
            case 'one' :dispatch(cardOneToggle()) 
                        console.log('cardOne toggled')
                        setDisplayCard('Do First')
                        break

            case 'two' :dispatch(cardTwoToggle())
                        console.log('cardTwo toggled')
                        setDisplayCard('Schedule')
                        break

            case 'three' :  dispatch(cardThreeToggle())
                            console.log('cardThree toggled')
                            setDisplayCard('Delegate')
                            break


            case 'four':dispatch(cardFourToggle())
                        console.log('cardFour toggled')
                        setDisplayCard("Don't Do")
                        break


            default : console.log('invalid card type')
                            break
        }
    }


  return (
    <div>
    <motion.div
        onTap={handleDistance}
        initial = {{x : 100 , y : 100}}
        animate = {{x : moveXDistance , y : 100}}
        transition = {{ease : 'linear' , 'type' : 'spring' , duration : 0.5}}
        style = {{"position" : "absolute", "top" : "-100px" , "left" : "0px"}}
    >
        <div className='row1-cards'>
            <Card className='card-one' style={{"background" : "#ff726f"}} onClick={() => handleCardDetails('one')}>
                <h5 style ={{"marginLeft" : "30px" , "marginTop" : "30px"}}>Do First</h5>
                <p style = {{"marginLeft" : "30px"}}>Urgent & Important</p>
                <Note content = {""} type = {""} card = {""} />
                {
                    cardOneNotes.map((item) => (
                        <Note content = {item.content} type = {item.type} card = {item.card} classname = {'card-one-color'} />
                    ))
                }
            </Card>
            <Card className='card-two' style = {{"background" : "lightblue"}} onClick={() => handleCardDetails('two')}>
                <h5 style ={{"marginLeft" : "30px" , "marginTop" : "30px"}}>Schedule</h5>
                <p style = {{"marginLeft" : "30px"}}>Less Urgent but Important</p>
                {
                    cardTwoNotes.map((item) => (
                        <Note content = {item.content} type = {item.type} card = {item.card} classname = {'card-two-color'}/>
                    ))
                }
            </Card>
        </div>

        <div className='row2-cards'>
            <Card className='card-three' style={{"background" : "lightgreen"}} onClick={() => handleCardDetails('three')}>
                <h5 style ={{"marginLeft" : "30px" , "marginTop" : "30px"}}>Delegate</h5>
                <p style = {{"marginLeft" : "30px"}}>Urgent but less important</p>
                {
                    cardThreeNotes.map((item) => (
                        <Note content = {item.content} type = {item.type} card = {item.card} classname = {'card-three-color'} />
                    ))
                }
            </Card>
            <Card className='card-four' style ={{"background" : "gray"}} onClick={() => handleCardDetails('four')} >
                <h5 style ={{"marginLeft" : "30px" , "marginTop" : "30px"}}>Don't Do</h5>
                <p style = {{"marginLeft" : "30px"}}>Neither Urgent not Important</p>
                {
                    cardFourNotes.map((item) => (
                        <Note content = {item.content} type = {item.type} card = {item.card} classname = {'card-four-color'} />
                    ))
                }
            </Card>
        </div>


    </motion.div>
            {showDisplayCard && <TasksDetail displayCard = {displayCard} showDisplayCard = {showDisplayCard} setShowDisplayCard = {setShowDisplayCard} currentCardType = {currentCardType} />}
            <button onClick={createComponent} >Click to create a component</button>
    </div>
  )
}

export default Matrix
