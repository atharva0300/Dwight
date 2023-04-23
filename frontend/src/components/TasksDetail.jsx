import React from 'react'

import {motion} from 'framer-motion'


const TasksDetail = ({displayCard}) => {
  return (
    <div>
        {displayCard && 
        <motion.div className='taskdetail-container'
            animate ={{'type' : 'tween' , duration : 0.5 }}
        >
            Displaying Card L {displayCard}

            
        </motion.div>
        }
    </div>
  )
}

export default TasksDetail
