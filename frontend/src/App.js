import './App.css';

import Signin from './pages/Signin';

// importing components here
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import BottomBar from './components/BottomBar';
import Board from './components/Board';

//importing react router components 
import {createBrowserRouter , createRoutesFromElements, RouterProvider,  Route , Outlet, useNavigate, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';


// importing context 
import AuthContext, { AuthProvider } from './context/AuthContext';
import WhiteBoard from './pages/WhiteBoard';

let firstRender = true


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element = {<Root />}>
          <Route index path = "/signin" element = {<Signin />} />
          <Route path="/try" exact element = {<WhiteBoard />} />
      </Route>
    )

  )


  return (
      <div className = "cover">
        <RouterProvider router = {router} />
      </div>
  );
}


const Root = () => {

  const navigate = useNavigate()
  
  console.log('privateRouter works')
  let {user} = useContext(AuthContext)
  console.log('user in the App.js : ' , user)


  useEffect(() => {
    if(user===false){
      navigate("/signin")
    }else{
      console.log(user.username)
      navigate("/try")
    }
  
  }, [user])


  console.log('inside root')
  return(
    <>
    <div>
    </div>
    
    <div>
      <Outlet />
    </div>
    </>
  )

}

export default App;
