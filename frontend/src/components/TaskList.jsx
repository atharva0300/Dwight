import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const TaskList = () => {

    // get a list of all the tasks
    let taskList = useSelector((state) => state.tasks.allTasks)

    useEffect(() => {
        console.log('taskList : ' , taskList)
    } , [taskList])


  return (
    <div>
    {
        taskList.map((item) => (
        <div>
            <p>Quadrant : {item.quadrant}</p>
            <p>Task Type : {item.type}</p>
            <p>Task : {item.content}</p>
            <br/>
        </div>
        ))
    }
    </div>
  )
}

export default TaskList
