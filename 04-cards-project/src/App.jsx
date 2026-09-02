import React from 'react'
import Card from'./component/Card'
import User from './component/User'
const App = () => {
  const arr=[1,2,3,4,5];
  return (
   <div className="parent">
    {/* <Card/>
    <Card/> */}
    {/* <User name={arr[2]}/>
    <User name='prince'/>
    <User name='Raghav'/> */}

    {arr.map(function(elem){
      return <h1>{elem}</h1>
    })}
   </div>
  )
}

export default App
