import './App.css';
import BottomBar from './components/BottomBar';
import Matrix from './components/Matrix';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';

import { useState } from 'react';
import Signin from './pages/Signin';

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
  let [signed , setSigned] = useState(false)

  return <>
    {signed && <div>
      <TopBar />
      <SideBar />
      <BottomBar />
      <Matrix />
      </div>
    }
    {!signed && <Signin setSigned={setSigned}/>}
    <div>
    <Outlet />
    </div>
  </>


}

export default App;
