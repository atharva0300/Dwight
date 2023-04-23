import './App.css';

import Signin from './pages/Signin';

//importing react router components 
import {createBrowserRouter , createRoutesFromElements, RouterProvider,  Route , Outlet, useNavigate} from 'react-router-dom'


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
      <Try />
    </div>
  )
}


const Root = () => {

  return <>
    <div>
      <Signin/>
      <Try />
    </div>

    <div>
      <Outlet />
    </div>
    
  </>


}

export default App;
