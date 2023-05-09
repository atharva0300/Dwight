import React, { useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';
import Note from './Note';
import { useDispatch, useSelector } from 'react-redux';

// importing actions and our matrix reducer 
import { cardOneToggle , cardTwoToggle , cardThreeToggle , cardFourToggle, setShowDisplayCard } from '../features/matrixSlice';
import {setQuadrant, setShowAllTasks, setShowTaskCreation, setShowTaskTypes, setShowTaskUpdation} from '../features/taskSlice'

import TasksDetail from './TasksDetail';

import {motion} from 'framer-motion'


const Matrix = () => {
    

    const cardOneNotes = useSelector((state) => state.notes.cardOneNotes)
    const cardTwoNotes = useSelector((state) => state.notes.cardTwoNotes)
    const cardThreeNotes = useSelector((state) => state.notes.cardThreeNotes)
    const cardFourNotes = useSelector((state) => state.notes.cardFourNotes)
    let showDisplayCard = useSelector((state) => state.matrix.showDisplayCard)

    const dispatch = useDispatch()

    let [moveXDistance , setXDistance] = useState({})



    useEffect(() => {
        if(showDisplayCard===false){
            setXDistance(0)
        }
    } , [showDisplayCard])


    const handleDistance = () => {
        dispatch(setShowDisplayCard(true))
        setXDistance(-100)
    }

    const handleCardDetails = (cardType) => {
        console.log('cardType : ' , cardType)
        dispatch(setQuadrant(cardType))
        dispatch(setShowDisplayCard(true))
        switch(cardType){
            case 'Do First' :dispatch(cardOneToggle()) 
                            console.log('cardOne toggled')
                            break

            case 'Schedule' :dispatch(cardTwoToggle())
                        console.log('cardTwo toggled')
                        break

            case 'Delegate' :  dispatch(cardThreeToggle())
                            console.log('cardThree toggled')
                            break


            case 'Eliminate':dispatch(cardFourToggle())
                        console.log('cardFour toggled')
                        break


            default : console.log('invalid card type')
                            break
        }
    }

    if(showDisplayCard===true){
        console.log('setShowDisplayCard : ' , showDisplayCard)
        dispatch(setShowAllTasks(false))
        dispatch(setShowTaskCreation(false))
        dispatch(setShowTaskUpdation(false))
        dispatch(setShowTaskTypes(true))

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
            <Card className='card-one' style={{"background" : "#ff726f"}} onClick={() => handleCardDetails('Do First')}>
                <h5 style ={{"marginLeft" : "30px" , "marginTop" : "30px"}}>Do First</h5>
                <p style = {{"marginLeft" : "30px"}}>Urgent & Important</p>
                <Note content = {""} type = {""} card = {""} />
                {
                    cardOneNotes.map((item) => (
                        <Note content = {item.content} type = {item.type} card = {item.card} classname = {'card-one-color'} />
                    ))
                }
            </Card>
            <Card className='card-two' style = {{"background" : "lightblue"}} onClick={() => handleCardDetails('Schedule')}>
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
            <Card className='card-three' style={{"background" : "lightgreen"}} onClick={() => handleCardDetails('Delegate')}>
                <h5 style ={{"marginLeft" : "30px" , "marginTop" : "30px"}}>Delegate</h5>
                <p style = {{"marginLeft" : "30px"}}>Urgent but less important</p>
                {
                    cardThreeNotes.map((item) => (
                        <Note content = {item.content} type = {item.type} card = {item.card} classname = {'card-three-color'} />
                    ))
                }
            </Card>
            <Card className='card-four' style ={{"background" : "gray"}} onClick={() => handleCardDetails('Eliminate')} >
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
            {showDisplayCard && <TasksDetail />}
    </div>
  )
}

export default Matrix
