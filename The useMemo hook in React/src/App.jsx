import { useMemo, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Create the large array outside the component to avoid recreating it on every render
const initialNumbers = new Array(30_000_000).fill(0).map((_, i) => ({
  index: i,
  isMagical: i === 29_000_000,
}));

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(initialNumbers);

  // Memoize the magical number computation with correct dependencies
  const magical = useMemo(() => numbers.find((item) => item.isMagical === true), [numbers]);

  const handleClick = () => {
    setCount((setCount) => count + 1);

    // If you really need to reset the numbers array
    if(count==10){
    setNumbers(
      new Array(10_000_000).fill(0).map((_, i) => ({
        index: i,
        isMagical: i === 9_000_000,
      }))
    )}
  };

  return (
    <>
      <div>
        <span>Magical number is {magical?.index}</span>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
