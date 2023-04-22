import './App.css';
import BottomBar from './components/BottomBar';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className = "cover">
      <TopBar />
      <SideBar />
      <BottomBar />
    </div>
  );
}

export default App;
