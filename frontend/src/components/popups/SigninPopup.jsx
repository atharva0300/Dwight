import React from 'react'

import {motion} from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { setShowSigninPopup } from '../../features/signinSlice'


const SigninPopup = () => {

  let showSigninPopup = useSelector((state) => state.signin.showSigninPopup)

  const dispatch = useDispatch()

  return (
    <div>
        {showSigninPopup && 
            <motion.div 
            initial = {{x : 0 , y : 500}}
            animate = {{x : 0 , y : 0 , scale : 1 , rotate : 0}}
            className = "signup-error-popup"
            transition ={{ease: "linear" , duration : 0.5 , x : {duration : 0.25}}}
            onClick = {(e) => dispatch(setShowSigninPopup(false))}
            >
            <h2>User not found! Invalid Login</h2>
            </motion.div>
        }
    </div>
  )
}

export default SigninPopup
