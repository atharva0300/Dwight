import './App.css';
import BottomBar from './components/BottomBar';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import Board from './components/Board';

import Signin from './pages/Signin';

import { useState } from 'react';


//importing react router components 
import {createBrowserRouter , createRoutesFromElements, RouterProvider,  Route , Link , Outlet} from 'react-router-dom'


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element = {<Root />}>
        <Route path = "/signin" element = {<Signin />} />
        <Route path="/try" element = {<TopBar />} />
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
  let [signed , setSigned] = useState(true)
  // initializing hte signed to true for -> Development

  return <>
    {signed && <div>
      <TopBar />
      <SideBar />
      <BottomBar />
      <Board />
      </div>
    }
    {!signed && <Signin setSigned={setSigned}/>}
    <div>
    <Outlet />
    </div>
  </>


}

export default App;
