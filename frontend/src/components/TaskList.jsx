import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


// bootstrap components
import Container from 'react-bootstrap/esm/Container'

const TaskList = () => {

    // get a list of all the tasks
    let taskList = useSelector((state) => state.tasks.allTasks)
    let [taskListEmpty, setTaskListisEmpty] = useState(0)

    useEffect(() => {
        console.log('taskList : ' , taskList)
        if(taskList.length===0){
          setTaskListisEmpty(true)
        }else{
          setTaskListisEmpty(false)
        }
    } , [taskList])


  return (
    <Container className='tasklist-outer'>
    {!taskListEmpty && 
        taskList.map((item) => (
        <div className='tasklist-item'>
            <p>Task Type : {item.type}</p>
            <p>Task : {item.contentInBrief}</p>
            <br/>
        </div>
        )) 
    }
    {taskListEmpty && 
      <div className='tasklist-empty'>
        <h5>There are No Tasks here...</h5>
      </div>

    }
    </Container>
  )
}

export default TaskList
