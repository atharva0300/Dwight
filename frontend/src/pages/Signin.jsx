import React, { useContext, useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

import SignupPopup from '../components/popups/SignupPopup';
import SigninPopup from '../components/popups/SigninPopup';
import { useDispatch, useSelector } from 'react-redux';


// importing thunk
import { loginUser, registerUser } from '../features/thunks/RegisterThunk';


import {setShowErrorDiv, setShowSigninPopup, setShowSignupPopup, signUpOne, signUpThree, signUpTwo } from '../features/signinSlice';
import { setSigned, signed } from '../features/userSlice';

let renderOnce = true

function Signin() {

  const [justifyActive, setJustifyActive] = useState('tab1');
  let [email , setEmail] = useState()
  let [password , setPassword] = useState()
  let [name, setName] = useState()
  let [username , setUsername] = useState()
  let [registered , setRegistered] = useState(false)

  let showSignupPopup = useSelector((state) => state.signin.showSignupPopup)
  let showSigninPopup = useSelector((state) => state.signin.showSigninPopup)

  let showDuplicatePopup = useSelector((state) => state.signin.showDuplicatePopup)

  // obtaining signed 
  let signed = useSelector((state) => state.user.signed)

  let message = useSelector((state) => state.user.message)

  const dispatch = useDispatch()

  useEffect(() => {
    if(signed===true && renderOnce===true){
      console.log('rendering signed false once')
      dispatch(setShowSigninPopup(false))
      renderOnce = false
    }
  } , [signed])



  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };



  const handleSignin = (e) => {
    e.preventDefault()
    let item = {
      'username' : username,
      'password' : password
    }

    dispatch(loginUser(item))

    if(signed===false){
      dispatch(setShowSigninPopup(true))
    }else if(signed===true){
      dispatch(setShowSigninPopup(false))
    }

  }
  

  const handleSignup =  (e) => {
    let item = {
      "name" : name,
      "username" : username,
      "email" : email,
      "password" : password
    }

    console.log(item)

    // checking for undergined values 
    if(name===undefined || username===undefined || email===undefined || password===undefined) {
      dispatch(signUpTwo())
    
    }
    else{
      dispatch(registerUser(item))

      console.log('message : ' , message)

      if(message==='1'){
        setRegistered(true)
        // show the signin page again
        handleJustifyClick('tab1')
        dispatch(signUpOne())
  
  
      }else if(message==='2'){
        setRegistered(false)
        // show error and ask to try
        dispatch(signUpTwo())
        
      }else if(message==='3'){
        // duplicate entry
        dispatch(signUpThree())
        console.log('showDuplicatePopup : ' , showDuplicatePopup)
        console.log('showsignup popup : ' , showSignupPopup)
        console.log('duplicate entry found')
  
        // change the tab
        handleJustifyClick('tab2')
      }
    }
    


  } 

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50 MDBContainer">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='email' onChange = {(e) => setUsername(e.target.value)} value = {username}  />
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange = {(e) => setPassword(e.target.value)} value = {password} />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" onClick = {handleSignin}>Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign un with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' onChange = {(e) => setName(e.target.value)} value = {name} />
          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' onChange={(e) => setUsername(e.target.value)} value = {username} />
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' onChange = {(e) => setEmail(e.target.value)} value = {email} />
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' onChange={(e) => setPassword(e.target.value)} value = {password} />

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100" onClick={handleSignup}>Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

      {showSignupPopup && <SignupPopup />}
      {showSigninPopup && <SigninPopup />}

    </MDBContainer>
  );
}

export default Signin;