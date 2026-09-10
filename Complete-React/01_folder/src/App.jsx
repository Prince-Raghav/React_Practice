import React from 'react'

const App = () => {
  return (
    // jsx main multiple element ko return nhi kr sakta isliye humne div me wrap kr diya  
    // <div>
    //   <h1> prince raghav</h1>
    //   <h2> or kya ho rah hai</h2>
    // </div>

    // jsx me hum fragment ka use kr sakte hai jisse hum multiple element ko return kr sakte hai bina kisi extra node ke
    <>
      <h1> prince raghav</h1>
      <h2> or kya ho rah hai</h2>
    </>
  )
}

export default App
