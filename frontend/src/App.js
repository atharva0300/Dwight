import './App.css';
import BottomBar from './components/BottomBar';
import Matrix from './components/Matrix';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';

import { useState } from 'react';
import Signin from './pages/Signin';

function App() {
  let [showSignin , setShowSignin] = useState(true)
  let [signed , setSigned] = useState(false)

  const handleSignin = (value) => {
      console.log('Handling signgin')
      if (signed==false){
          setShowSignin(true)
      }else{
          setShowSignin(false)
      }
  }

  return (
    <div className = "cover">
      {signed && 
        <TopBar signed = {false} setShowSignin = {setShowSignin} /> &&
        <SideBar /> && 
        <BottomBar /> && 
        <Matrix />
      }
      {!signed && <Signin />}
      
    </div>
  );
}

export default App;
