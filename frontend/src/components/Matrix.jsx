import React from 'react'

import Card from 'react-bootstrap/Card';

const Matrix = () => {
  return (
    <div>
        <div className='row1-cards'>
            <Card className='card-one' style={{"background" : "#ff726f"}}>
                <h5 style ={{"margin-left" : "30px" , "margin-top" : "30px"}}>Do First</h5>
                <p style = {{"margin-left" : "30px"}}>Urgent & Important</p>
            </Card>
            <Card className='card-two' style = {{"background" : "lightblue"}}>
                <h5 style ={{"margin-left" : "30px" , "margin-top" : "30px"}}>Schedule</h5>
                <p style = {{"margin-left" : "30px"}}>Less Urgent but Important</p>
            </Card>
        </div>

        <div className='row2-cards'>
            <Card className='card-three' style={{"background" : "lightgreen"}}>
                <h5 style ={{"margin-left" : "30px" , "margin-top" : "30px"}}>Delegate</h5>
                <p style = {{"margin-left" : "30px"}}>Urgent but less important</p>
            </Card>
            <Card className='card-four' style ={{"background" : "gray"}}>
                <h5 style ={{"margin-left" : "30px" , "margin-top" : "30px"}}>Don't Do</h5>
                <p style = {{"margin-left" : "30px"}}>Neither Urgent not Important</p>
            </Card>
        </div>

    </div>
  )
}

export default Matrix
