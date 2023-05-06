import React from 'react'

import {motion} from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { setShowDuplicatePopup, setShowErrorDiv, setShowSuccessDiv } from '../../features/signinSlice'

const SignupPopup = () => {

  let showSuccessDiv = useSelector((state) => state.signin.showSuccessDiv)
  let showErrorDiv = useSelector((state) => state.signin.showErrorDiv)
  let showDuplicatePopup = useSelector((state) => state.signin.showDuplicatePopup)


  const dispatch = useDispatch()

  return (
    <div>
    {showSuccessDiv && 
      <motion.div 
      initial = {{x : 0 , y : 500}}
      animate = {{x : 0 , y : 0 , scale : 1 , rotate : 0}}
      className = "signup-success-popup"
      transition ={{ease: "linear" , duration : 0.5 , x : {duration : 0.25}}}
      onClick = {(e) => dispatch(setShowSuccessDiv(false))}
      >
    <h2>Signup successful! Please Signin</h2>
    </motion.div>
    }

    {showErrorDiv && 
      <motion.div 
      initial = {{x : 0 , y : 500}}
      animate = {{x : 0 , y : 0 , scale : 1 , rotate : 0}}
      className = "signup-error-popup"
      transition ={{ease: "linear" , duration : 0.5 , x : {duration : 0.25}}}
      onClick = {(e) => dispatch(setShowErrorDiv(false))}
      >
    <h2>Invalid Details! Please fill the details again</h2>
    </motion.div>
    }

    {showDuplicatePopup && 
      <motion.div 
      initial = {{x : 0 , y : 500}}
      animate = {{x : 0 , y : 0 , scale : 1 , rotate : 0}}
      className = "signup-duplicate-popup"
      transition ={{ease: "linear" , duration : 0.5 , x : {duration : 0.25}}}
      onClick = {(e) => dispatch(setShowDuplicatePopup(false))}
      >
    <h2>User is already Registered! Please Signin</h2>
    </motion.div>
    }
    </div>
  )
}


export default SignupPopup
