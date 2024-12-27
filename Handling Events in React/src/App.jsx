import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("harsh")
  const [form, setform] = useState({email:"",phone:""})

  const handleclick = () => {
    alert("Hey i am clicked")
  }

  const handlemouseover =()=>{
    alert("Hey i am red div")
  }

  const handlechange=(e)=>{
    // setname(e.target.value)
    // console.log(setname(e.target.value))

    setform({...form,[e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleclick}>click me</button>
      </div>

      {/* <div className="red" onMouseOver={handlemouseover}>
        I am red div
      </div> */}

      {/* <input type="text" value={name} onChange={handlechange}/> */}
      <input type="text" name='email' value={form.email} onChange={handlechange}/>
      <input type="text" name='phone' value={form.phone} onChange={handlechange}/>
    </>
  )
}

export default App
