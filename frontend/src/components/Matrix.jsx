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

    const dispatch = useDispatch()

    let [displayCard , setDisplayCard] = useState("")
    let [showDisplayCard  , setShowDisplayCard] = useState(false)
    let [moveXDistance , setXDistance] = useState({})


    useEffect(() => {
        if(cardOne===true){
            console.log('cardOne toggled')
            setDisplayCard('Do First')
            
        }else if(cardTwo===true){
            console.log('cardTwo toggled')
            setDisplayCard('Schedule')

        }else if(cardThree===true){
            console.log('cardThree toggled')
            setDisplayCard('Delegate')

        }else if(cardFour===true){
            console.log('cardFour toggled')
            setDisplayCard("Don't Do")

        }

    } , [cardOne , cardTwo , cardThree , cardFour])

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

    // onClick={() => dispatch(cardFourToggle())} on Card 4 

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
            <Card className='card-one' style={{"background" : "#ff726f"}} onClick={() => dispatch(cardOneToggle())}>
                <h5 style ={{"marginLeft" : "30px" , "marginTop" : "30px"}}>Do First</h5>
                <p style = {{"marginLeft" : "30px"}}>Urgent & Important</p>
                <Note />
                <Note />
            </Card>
            <Card className='card-two' style = {{"background" : "lightblue"}} onClick={() => dispatch(cardTwoToggle())}>
                <h5 style ={{"marginLeft" : "30px" , "marginTop" : "30px"}}>Schedule</h5>
                <p style = {{"marginLeft" : "30px"}}>Less Urgent but Important</p>
                <Note />
            </Card>
        </div>

        <div className='row2-cards'>
            <Card className='card-three' style={{"background" : "lightgreen"}} onClick={() => dispatch(cardThreeToggle())}>
                <h5 style ={{"marginLeft" : "30px" , "marginTop" : "30px"}}>Delegate</h5>
                <p style = {{"marginLeft" : "30px"}}>Urgent but less important</p>
                <Note />
            </Card>
            <Card className='card-four' style ={{"background" : "gray"}} onClick={() => dispatch(cardFourToggle())}>
                <h5 style ={{"marginLeft" : "30px" , "marginTop" : "30px"}}>Don't Do</h5>
                <p style = {{"marginLeft" : "30px"}}>Neither Urgent not Important</p>
                <Note />
            </Card>
        </div>


    </motion.div>
            {showDisplayCard && <TasksDetail displayCard = {displayCard} showDisplayCard = {showDisplayCard} setShowDisplayCard = {setShowDisplayCard} />}
            <button onClick={createComponent} >Click to create a component</button>
            
            {/*tasks.map((item) => (
                <Note />
            ))
            */
            
            }
    </div>
  )
}

export default Matrix
