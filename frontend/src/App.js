import './App.css';
import BottomBar from './components/BottomBar';
import Matrix from './components/Matrix';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className = "cover">
      <TopBar />
      <SideBar />
      <BottomBar />
      <Matrix />
    </div>
  );
}

export default App;
