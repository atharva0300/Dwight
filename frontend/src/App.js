import './App.css';
import BottomBar from './components/BottomBar';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import Board from './components/Board';

import Signin from './pages/Signin';

import { useEffect, useState } from 'react';


//importing react router components 
import {createBrowserRouter , createRoutesFromElements, RouterProvider,  Route , Link , Outlet, useNavigate} from 'react-router-dom'

// importing actions
import { signinSuccess , signinFail } from './features/signinRegisterSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function App() {

  let signed = useSelector((state) => state.signinRegister.signed)

  const dispatch = useDispatch()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element = {<Root />}>
        <Route index path = "/signin" element = {<Signin />} />
        <Route path="/try" element = {<Try />} />
      </Route>
    )
  )


  return (
    <div className = "cover">
      <RouterProvider router = {router} />
    </div>
  );
}

const Try = () => {
  // try div 
  return(
    <div>
      <Try />
    </div>
  )
}


const Root = () => {


  const navigate = useNavigate()

  useEffect(() => {
    if(signed==true){
      navigate("try/")
    }else if(signed==false){
      navigate('signin/')
    }
  } , [signed])


  return <>
    <div>
    <Signin setSigned={setSigned}/>
      {signed && <Try />}
      <Outlet />
    </div>
    
  </>


}

export default App;
