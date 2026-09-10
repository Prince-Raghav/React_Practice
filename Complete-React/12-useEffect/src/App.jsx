import React, { useEffect } from 'react'
import {useState} from 'react'

const App = () => {

   const[count,setCount]=useState(0);
   const[total,setTotal]=useState(1);
  


  // first-->side-effect function
  // second--> clean-up function
  // third--> comma separated dependency function
  // useEffect ki Multiple type ki variation hoti hai ..

  // variation:1 --> Runs on every Render
  // useEffect(()=>{
  //    alert("i will run on each render");
  // })

  // variation:2 --> Runs on only First Render
  // useEffect(()=>{
  //       alert("I will run ONly first Render");
  // },[])

  //variation:3 
  // useEffect(()=>{
  //   alert("I will run every time when count is updated");
  // },[count])

  // Variation:4 --> Multiple dependencies
  useEffect(()=>{

     alert("I will run every time when count/total is updated");
  },[count,total])







  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])

  function click(){
         setCount(count+1);
         
  }
  function updatetotal(){
       setTotal(total+1);
  }
 
  
  return (
    <div>
      <button onClick={click}>Update Count</button>
      <br/>
      <h1>Count is :{count}</h1>
      <br/>
       <button onClick={updatetotal}>Update Total</button>
      <br/>
      <h1>Total is :{total}</h1>
    </div>
  )
}

export default App
