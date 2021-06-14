import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'

interface IShowResult {
  message: string;
  status: string;
}


function App() {
  const [toggle, setToggle] = useState(true)
  const positions = useMousePosition();
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [toggle])
  const dogResult = data as IShowResult;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Hello /> */}
        <LikeButton />
        {/* {toggle && <MouseTracker />} */}
        <p>
          <button onClick={() => { setToggle(!toggle) }}>ToggleMousePositon</button>
        </p>
        {/* <p>X:{positions.x} Y:{positions.y}</p> */}
        {
          loading ? '🐕正在加载' : <img src={dogResult && dogResult.message} />
        }
      </header>
    </div>
  );
}

export default App;
