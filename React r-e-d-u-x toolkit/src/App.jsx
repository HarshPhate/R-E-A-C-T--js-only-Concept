import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from "./components/Navbar"
import { decrement,increment,incrementByAmount,multiply } from './counter/counterSlice'

function App() {
const count = useSelector((state) => state.counter.value)
const dispatch = useDispatch()
  

  return (
       <>
       <Navbar/>
       <div>
        <button onClick={() => dispatch(decrement())}>-</button>
       currentlyb count is {count}
       <button onClick={() => dispatch(incrementByAmount(5))}>+</button>
       </div>
       </>
  );
}

export default App;
