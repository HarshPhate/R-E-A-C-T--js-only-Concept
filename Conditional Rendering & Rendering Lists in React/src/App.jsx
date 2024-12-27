import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './todos.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] =useState(false)
  const [todos ,setTodos]=useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey Another todo",
      desc: "I am a good todo too"
    },
    {
      title: "Hey I am grocery todo",
      desc: "I am a good todo but I am grocery todo"
    },
  ])

  // const Todo =({todo})=>{
  //   return(
  //     <div className='tbk'>
  //     <div className="todo">{todo.title}</div>
  //     <div className="todo">{todo.desc}</div>
  //     </div>
  //   )

  // }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn?<button>I will be True</button>:<button>I will be h</button>}
      {/* {sho<Todo/>wbtn && <button>I will be True</button>} */}
      
      {todos.map(todo=>{
        // return  <Todo key={todo.title} todo={todo}/>
        
          return( 
            <div key={todo.title} className='tbk'>
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
            </div>
          )}
          
      )}

      <div className="card">
  
        <button onClick={() => setshowbtn(!showbtn)}>
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
  )
}

export default App
