import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {
const [todo ,settodo]=useState("")
const [todos ,settodos]=useState([])
const [showFinished, setshowFinished] = useState(true)

useEffect(()=>{
  let todostring =localStorage.getItem("todos")
  if(todostring){
    let todos =JSON.parse(localStorage.getItem("todos"))
    settodos(todos)

  }
},[])

  const saveTols =(params)=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  }


  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }

const handleEdit = (e, id)=>{ 
  let t = todos.filter(i=>i.id === id) 
  settodo(t[0].todo)
  let newTodos = todos.filter(item=>{
    return item.id!==id
  }); 
  settodos(newTodos) 
  saveTols()
}

  const handleDelete= (e,id)=>{
    let newTodos =todos.filter(item=>{
      return item.id !==id;
    })
    settodos(newTodos)
    saveTols

  }


  const handleAdd= ()=>{
   settodos([...todos, {id:uuidv4(), todo,isCompleted: false}])
   settodo("")
   saveTols()
  //  console.log(todos)

  }
  
  const handlechange= (e)=>{
     settodo(e.target.value)
  }
  
  const handlecheckbox= (e)=>{
    // console.log(e,e.target)
    let id = e.target.name;
    console.log(`This id is ${id}`)
    let index = todos.findIndex(item=>{
      return item.id ===id
    })
    // console.log(index)
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    settodos(newTodos)
    saveTols()
    // console.log(newTodos)
  }
  

  return (
    <>
    <Navbar/>
     <div className="container mx-auto my-5 bg-violet-300 rounded-xl p-5 min-h-[70vh]">
      <div className="addtodo">
        <h2 className='text-lg font-bold'>Add a Todo</h2>
        <input onChange={handlechange} value={todo} className='w-1/2' type="text" />
        <button onClick={handleAdd} disabled={todo.length<=3} className='bg-violet-900 text-white hover:bg-violet-950 rounded-md mx-2 px-3'>Save</button>
      </div>

      <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} /> 
         <label className='mx-2' htmlFor="show">Show Finished</label> 
         <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>

       <h2 className='texl-xl font-bold'>Your Todo</h2>
       <div className="todos">
        {todos.length ===0 && <div>NO Todos to display</div> }
        {todos.map(item=>{
        
       return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex my-3 justify-between">
         <div className='flex gap-5 w-1/2'> 
        <input name={item.id} onChange={handlecheckbox} type="checkbox" checked={todo.isCompleted} id="" />
          <div className= {item.isCompleted?"line-through":""} >{item.todo}</div>
          </div>
          <div className="button flex h-full justify-between">
            <button onClick={(e)=>{handleEdit(e,item.id)}} className='bg-violet-900 text-white hover:bg-violet-950 rounded-md mx-2 px-3'>Edit</button>
            <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-violet-900 text-white hover:bg-violet-950 rounded-md mx-2 px-3'>Delete</button>
           
          </div>
        </div>
      })}
       </div>
      </div>
    
    </>
  )
}

export default App
