import './App.css';
import About from './About';
import Photos from './Photos';
import Profile from './Profile-menu';
import Likes from './Likes';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Profile />
        <div className='bot-container'>
          <About/>
          <Photos/>
          <Likes/>
        </div>
      </div>
    </div>
  );
}

export default App;
