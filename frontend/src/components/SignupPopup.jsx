import React, { useState } from 'react'

import {motion} from 'framer-motion'

const SignupPopup = ({showSuccessDiv , setShowSuccessDiv , showErrorDiv , setShowErrorDiv , showDuplicatePopup , setShowDuplicatePopup }) => {

  return (
    <div>
    {showSuccessDiv && 
      <motion.div 
      initial = {{x : 0 , y : 500}}
      animate = {{x : 0 , y : 0 , scale : 1 , rotate : 0}}
      className = "signup-success-popup"
      transition ={{ease: "linear" , duration : 0.5 , x : {duration : 0.25}}}
      onClick = {(e) => setShowSuccessDiv(false)}
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
      onClick = {(e) => setShowErrorDiv(false)}
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
      onClick = {(e) => setShowDuplicatePopup(false)}
      >
    <h2>User is already Registered! Please Signin</h2>
    </motion.div>
    }
    </div>
  )
}


export default SignupPopup
