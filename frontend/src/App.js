import './App.css';

import Signin from './pages/Signin';

//importing react router components 
import {createBrowserRouter , createRoutesFromElements, RouterProvider,  Route , Outlet, useNavigate, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import WhiteBoard from './pages/WhiteBoard';



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

  const signed = useSelector((state) => state.user.signed)


  useEffect(() => {
    if(signed===false){
      navigate("/signin")
    }else{
      console.log(signed.username)
      navigate("/try")
    }
  
  }, [signed])


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
