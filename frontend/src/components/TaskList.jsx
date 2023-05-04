import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// importing assets 
import trash from '../assets/delete.png'
import edit from '../assets/edit.png'


// bootstrap components
import Container from 'react-bootstrap/esm/Container'
import { deleteTask, getAllTasks } from '../features/thunks/TaskThunk'

const TaskList = () => {

    // get a list of all the tasks
    let taskList = useSelector((state) => state.tasks.allTasks)
    let [taskListEmpty, setTaskListisEmpty] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        console.log('taskList : ' , taskList)
        if(taskList.length===0){
          setTaskListisEmpty(true)
        }else{
          setTaskListisEmpty(false)
        }
    } , [taskList , getAllTasks ])


    const updateTaskHandler = () => {
      console.log('update task handler')

    }
    const deleteTaskHandler = async (uuid) => {
      // deleting the task
      
      // 1. obtain the task ID 
      console.log('uuid to delete : ' , uuid )


      // 2. fetch the delete method to delete the task in the backend 
      let response = await dispatch(deleteTask({'uuid' : uuid}))
      console.log('response : ' , response)

      // 3. re-fetch all the tasks
      dispatch(getAllTasks())

      // comment : might have to put this in the callback


    }


  return (
    <Container className='tasklist-outer'>
    {!taskListEmpty && 
        taskList.map((item) => (
        <div className='tasklist-item'>
            <p>UUID : {item.uuid}</p>
            <p>Task Type : {item.type}</p>
            <p>Task : {item.contentInBrief}</p>
            <div className='tasklist-icons'>
              <div onClick={updateTaskHandler}>
                <img src = {edit} alt = "edit" />
              </div>
              <div onClick={() => deleteTaskHandler(item.uuid)}>
                <img src = {trash} alt = "delete" />
              </div>
            </div>
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
