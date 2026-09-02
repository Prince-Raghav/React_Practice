import React from 'react'
import Card from './components/Card'
import Navbar from './components/navbar'
const App = () => {
  //  let a="prince";
  //  var b=20;
  return (
    // jsx me hum variable ko directly use nhi kr sakte hai isliye humne {} ka use kiya hai
    // <div>
    //  <h1>hello guys my name is {a}</h1>
    //  <h1> i am {b} years old</h1>
    // </div>
    
    
<div>
  <Navbar/>
  <Card/>
  <Card/>
  
</div>
   
  )
}
export default App


