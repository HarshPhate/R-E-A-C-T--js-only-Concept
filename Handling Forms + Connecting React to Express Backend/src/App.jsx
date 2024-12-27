
import { useForm } from "react-hook-form";
import './App.css'


function App() {

  const { register, handleSubmit, setError, watch, formState: { errors ,isSubmitting} } = useForm();
  
  // const onSubmit = data => console.log(data);

  const delay =(d)=>{
return new Promise((resolve,reject)=>{
setTimeout(() => {
  resolve()
}, d*1000);
})
  }

  const onSubmit =async(data)=>{
    // await delay(2)
    let r = await fetch("http://localhost:3000/", {
      method: "POST",headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let res =await r.text()
    console.log(data,res)
    // if (data.username !== "shubham") {
    //   setError("myform", {
    //     type: "manual",
    //     message: "Invalid username! Please try again.",
    //   });
    // }
    // if (data.username == "rohan") {
    //   setError("blocked", {
    //     message: "Invalthis user id is blocked! Please try again.",
    //   });
    // }
  }


  return (
    <>
    {isSubmitting &&<div>loading... </div>}
     <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder='Email' {...register("username" , {required:{value:true ,message:"this  filled is required"} ,minLength:{value:3, message:"min length is 3"} ,maxLength:{value:8, message:"max length is 8"}})} />
      {errors.username && <div>{errors.username.message}</div>}
      <br/>
      <input type="password" placeholder='Password'  {...register("password" ,{minLength:{value:3, message:"min length is 3"}})}/>
      {errors.password && <div>{errors.password.message}</div>}
      <button disabled={isSubmitting}>submit</button>
      {errors.myform && <div className='red'>{errors.myform.message}</div>}
      {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
      </form>
     </div>
    </>
  )
}

export default App
