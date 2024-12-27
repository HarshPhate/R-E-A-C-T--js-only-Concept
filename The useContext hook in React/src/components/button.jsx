import React,{useContext} from 'react'
import { counterContext } from './context/context'
import Component1 from './component1'

const button = () => {
    const value =useContext(counterContext)
  return (
    <div>
        <button onClick={()=>{value.setCount((count)=>count+1)}}><span><Component1/></span>click me</button>
    </div>
  )
}

export default button