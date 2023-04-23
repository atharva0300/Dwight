import React, { useState } from 'react';
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

import axios from 'axios';
import SignupPopup from '../components/SignupPopup';
import SigninPopup from '../components/SigninPopup';


function Signin({setSigned}) {

  const [justifyActive, setJustifyActive] = useState('tab1');
  let [email , setEmail] = useState()
  let [password , setPassword] = useState()
  let [name, setName] = useState()
  let [username , setUsername] = useState()
  let [registered , setRegistered] = useState(false)
  let [showSignupPopup , setShowSignupPopup] = useState(false)
  let [showSigninPopup , setShowSigninPopup] = useState(false)
  let [showDuplicatePopup , setShowDuplicatePopup] = useState(false)

  let [showSuccessDiv , setShowSuccessDiv] = useState(false)
  let [showErrorDiv , setShowErrorDiv] = useState(false)

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const SubmitSignin = (e) => {
    //making a post request to the django server
    let item = {
        "email" : email,
        "password" : password
    }
    console.log(item)

    let parsedItem = JSON.stringify(item)

    axios.get(`http://127.0.0.1:8000/signin/?email=${email}&password=${password}`)
    .then((response) => {
        console.log(response.data)
        if(response.data.message=='1'){
            console.log("signed set to true")
            setSigned(true)           
        }else{  
            console.log("signed set to false")
            setSigned(false)
            setShowSigninPopup(true)

            // clearing out the contents of the form
            setEmail("")
            setPassword("")
        }
    }).catch((error) => {
        console.log('Error found : ' , error)
    })
  }

  const handleSignup = (e) => {
    let item = {
      "name" : name,
      "username" : username,
      "email" : email,
      "password" : password
    }

    console.log(item)

    axios.post('http://127.0.0.1:8000/register/' , item)
    .then((response) => {
      console.log(response.data)
      if(response.data.message=='1'){
        setRegistered(true)
        // show the signin page again
        setShowSignupPopup(true)
        handleJustifyClick('tab1')
        setShowSuccessDiv(true)
        setShowErrorDiv(false)
      }else if(response.data.message=='2'){
        setRegistered(false)
        // show error and ask to try
        setShowSignupPopup(false)
      }else if(response.data.message=='3'){
        // duplicate entry
        setShowErrorDiv(false)
        setShowSigninPopup(false)
        setShowSuccessDiv(false)
        setShowDuplicatePopup(true)
        setShowSignupPopup(true)
        console.log("shoeErrorDiv" , showErrorDiv)
        console.log('duplicate entry found')

        // change the tab
        handleJustifyClick('tab1')
      }
    }).catch((err) => {
      console.log("Error : " , err)
      setShowSignupPopup(true)
      setShowSuccessDiv(false)
      setShowErrorDiv(true)

      // clear the contents of the form
      setName("")
      setUsername("")
      setEmail("")
      setPassword("")
    })
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

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange = {handleEmail} value = {email}  />
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange = {handlePassword} value = {password} />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" onClick = {SubmitSignin}>Sign in</MDBBtn>
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

      {showSignupPopup && <SignupPopup showSuccessDiv = {showSuccessDiv}  setShowSuccessDiv = {setShowSuccessDiv} showErrorDiv = {showErrorDiv} setShowErrorDiv = {setShowErrorDiv} showDuplicatePopup = {showDuplicatePopup} setShowDuplicatePopup = {setShowDuplicatePopup} />}
      {showSigninPopup && <SigninPopup showSigninPopup = {showSigninPopup} setShowSigninPopup = {setShowSigninPopup}   />}

    </MDBContainer>
  );
}

export default Signin;