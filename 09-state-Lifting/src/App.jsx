import React from 'react'
import Card from './component/Card'
import {useState} from 'react'

const App = () => {
  //create state
  //manage state
  //change state
  //sabhi child me state ko sync karwadunga
  const[name,setName]=useState('');
  return (
    <div>
      <Card name={name} setName={setName}/>
      <p>I am inside Parent Componet and Value of name is :{name}</p>
    </div>
  )
}

export default App
