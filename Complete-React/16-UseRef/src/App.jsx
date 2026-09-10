import React from 'react'
import { useState,useEffect,useRef } from 'react'

const App = () => {
  const[count,setCount]=useState(0);
  let btnRef=useRef(); // iski help se main dom ke kisi bhi element access kr skta hun
  // let val=1;
  let val=useRef(0); // ab ye val esaa variable h jo ki component ke re-render hone par bhi apni value ko maintain karke rakhega.
  function handleIncrement(){
    // val=val+1;
    val.current=val.current+1;
    console.log("Value of val:",val.current);
    setCount(count+1);
  }
  function changeColor(){
    btnRef.current.style.backgroundColor="green";
  }



  // timer wala logic
  const [time,setTime]=useState(0);
  let timerRef=useRef(null);
  function startTimer(){
      timerRef.current=setInterval(()=>{
        setTime(time=>time+1);
      },1000);
  }
  function stopTimer(){
       clearInterval(timerRef.current);
       timerRef.current=null;
  }
  function resetTimer(){
         stopTimer();
         setTime(0);
  }
  return (
    <div>
      <button onClick={handleIncrement} ref={btnRef}>Increment</button>
      <br/>
      <br/>
      <h1>Count: {count}</h1>
      <br/>
      <br/>
      <button onClick={changeColor}>change color of 1</button>
      <br/>
      <br/>
      <h1>StopWatch : {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <br/>
      <br/>
      <button onClick={stopTimer}>Stop</button>
      <br/>
      <br/>
      <button onClick={resetTimer}>Reset</button>

    </div>
  )
}

export default App
