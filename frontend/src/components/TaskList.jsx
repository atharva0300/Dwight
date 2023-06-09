import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// importing assets 
import trash from '../assets/delete.png'
import edit from '../assets/edit.png'


// bootstrap components
import Container from 'react-bootstrap/esm/Container'

// importing thunks 
import { deleteTask, getAllTasks, getIconImage, getSingleTask } from '../features/thunks/TaskThunk'
import {setShowAllTasks, setShowTaskUpdation, setTaskListisEmpty, setUpdateTask} from '../features/taskSlice'
import { deleteNote } from '../features/noteSlice'

// importing userID 
import { userID } from '../features/userSlice'


const TaskList = () => {

    // get a list of all the tasks
    let taskList = useSelector((state) => state.tasks.allTasks)
    let taskListEmpty = useSelector((state) => state.tasks.taskListEmpty)

    let updateTaskBoolean = useSelector((state) => state.tasks.updateTaskBoolean)
    let quadrant = useSelector((state) => state.tasks.quadrant)
          
    let iconPath = useSelector((state) => state.tasks.iconPath)


    const dispatch = useDispatch()

    if(taskList.length===0){
      dispatch(setTaskListisEmpty(true))
    }else{
      dispatch(setTaskListisEmpty(false))
    }


    const updateTaskHandler =  (taskUUID) => {
      console.log('update task handler')
      dispatch(setShowAllTasks(false))
      dispatch(setShowTaskUpdation(true))

      // 1. send a get request to the updatetask endpoint 
      // 2. obtain the taskDetails
      // 3. navigate to the Task page with the modified update button 
      // 4. send a post request to update the task
      // 5. navigate to the taskDetail view page 

      console.log('uuid : ' , taskUUID)
      const item = {
        'taskUUID' : taskUUID,
        'userID' : userID
      }
      dispatch( getSingleTask(item))


      // calling the iconImage thunk 

      dispatch(setUpdateTask(true))

      // dispatch(setShowAllTasks())

      console.log('updateTaskBoolean : ' , updateTaskBoolean )

    }


    const deleteTaskHandler = (taskUUID) => {
      // deleting the task
      
      // 1. obtain the task ID 
      console.log('uuid to delete : ' , taskUUID )


      // 2. fetch the delete method to delete the task in the backend 
      let response = dispatch(deleteTask({'taskUUID' : taskUUID}))
      console.log('response : ' , response)

      // 3. re-fetch all the tasks
      let item = {
        quadrant : quadrant,
        userID : userID
      }
      response = dispatch(getAllTasks(item))
      console.log('response after rerendering the updated list : ' , response)
      // comment : might have to put this in the callback

      item = {
        quadrant : quadrant,
        uuid : taskUUID
      }
      dispatch(deleteNote(item))


    }


  return (
    <Container className='tasklist-outer'>
    {!taskListEmpty && 
        taskList.map((item) => (
        <div className='tasklist-item' key = {item.taskUUID}>
            <p>Task Type : {item.type}</p>
            <p>Task : {item.contentInBrief}</p>
            <div className='tasklist-icons'>
              <div onClick={() => updateTaskHandler(item.taskUUID)}>
                <img src = {edit} alt = "edit" />
              </div>
              <div onClick={() => deleteTaskHandler(item.taskUUID)}>
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
