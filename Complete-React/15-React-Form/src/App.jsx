import React from 'react'
import { useForm } from 'react-hook-form'
import './App.css'
const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data){
    console.log("Form submitted successfully",data);
  }
  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    <label>First name:</label>
    <input
    className={errors.firstName ? "input-error" : ""}
    
    {...register("firstName",
          {
            required:true, 
            minLength:{value:3,message:"First name must be at least 3 characters"},
            maxLength:{value:5,message:"First name must be at most 5 characters"} 
          })} />
          {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
    <br/>
    <br/>
    <label>Middle name:</label>
    <input
    className={errors.middleName ? "input-error" : ""}
    {...register("middleName")} />
    <br/>
    <br/>
    <label>Last name:</label>
    <input
    className={errors.lastName ? "input-error" : ""}
    {...register("lastName")} />
    <br/>
    <br/>
    <button type='submit' >Submit</button>
    
   </form>
  )
}

export default App
