import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0); // count is the state variable, setCount is the function that updates it
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      <>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      </>
      
    </div>
  );
}

export default App;
