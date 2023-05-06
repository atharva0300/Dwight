import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// importing assets 
import trash from '../assets/delete.png'
import edit from '../assets/edit.png'


// bootstrap components
import Container from 'react-bootstrap/esm/Container'

// importing thunks 
import { deleteTask, getAllTasks, getSingleTask } from '../features/thunks/TaskThunk'
import {setShowAllTasks, setTaskListisEmpty, setUpdateTask} from '../features/taskSlice'
import { deleteNote } from '../features/noteSlice'


const TaskList = () => {

    // get a list of all the tasks
    let taskList = useSelector((state) => state.tasks.allTasks)
    let taskListEmpty = useSelector((state) => state.tasks.taskListEmpty)

    let updateTaskBoolean = useSelector((state) => state.tasks.updateTaskBoolean)
    let quadrant = useSelector((state) => state.tasks.quadrant)

    const dispatch = useDispatch()

    useEffect(() => {
        console.log('taskList : ' , taskList)
        if(taskList.length===0){
          dispatch(setTaskListisEmpty(true))
        }else{
          dispatch(setTaskListisEmpty(false))
        }
    } , [taskList])


    const updateTaskHandler = (uuid) => {
      console.log('update task handler')

      // 1. send a get request to the updatetask endpoint 
      // 2. obtain the taskDetails
      // 3. navigate to the Task page with the modified update button 
      // 4. send a post request to update the task
      // 5. navigate to the taskDetail view page 

      dispatch(getSingleTask({'uuid' : uuid}))
      dispatch(setUpdateTask(true))

      dispatch(setShowAllTasks())

      console.log('updateTaskBoolean : ' , updateTaskBoolean )

    }


    const deleteTaskHandler = async (uuid) => {
      // deleting the task
      
      // 1. obtain the task ID 
      console.log('uuid to delete : ' , uuid )


      // 2. fetch the delete method to delete the task in the backend 
      let response = await dispatch(deleteTask({'uuid' : uuid}))
      console.log('response : ' , response)

      // 3. re-fetch all the tasks
      let item = {
        quadrant : quadrant
      }
      response = await dispatch(getAllTasks(item))
      console.log('response after rerendering the updated list : ' , response)
      // comment : might have to put this in the callback

      item = {
        quadrant : quadrant,
        uuid : uuid
      }
      dispatch(deleteNote(item))


    }


  return (
    <Container className='tasklist-outer'>
    {!taskListEmpty && 
        taskList.map((item) => (
        <div className='tasklist-item' key = {item.uuid}>
            <p>Task Type : {item.type}</p>
            <p>Task : {item.contentInBrief}</p>
            <div className='tasklist-icons'>
              <div onClick={() => updateTaskHandler(item.uuid)}>
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
