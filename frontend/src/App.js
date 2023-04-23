import './App.css';

import Signin from './pages/Signin';

// importing components here
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import BottomBar from './components/BottomBar';
import Board from './components/Board';

//importing react router components 
import {createBrowserRouter , createRoutesFromElements, RouterProvider,  Route , Outlet, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';



function App() {

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
      <TopBar />
      <SideBar />
      <Board />
      <BottomBar />
    </div>
  )
}


const Root = () => {

  let signed = useSelector((state) => state.signin.signed)

  const navigate = useNavigate()

  useEffect(() => {
    if(signed===false){
      navigate("/signin")
      console.log('signed : ' , signed)
    }else if(signed===true){
      console.log('signed : ' , signed)
      navigate("/try")
    }
  }, [signed])


  return <>
    <div>
    </div>

    <div>
      <Outlet />
    </div>
    
  </>


}

export default App;
