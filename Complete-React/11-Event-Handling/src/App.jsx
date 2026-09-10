import React from 'react'

const App = () => {
   function onclick(){
      alert('badiya sab');
    }
    function handleMouseOver(){
      alert('aree kya baat hai');
    }
    function handleonChange(){
      console.log("input change huaa yehh !!")
    }
    function handleSubmit(e){
      e.preventDefault();
      alert('form submit kr dun kya !!')
    }
    function handleInputChange(e){
      console.log("value till now ", e.target.value);
    }
  return (
    <div>
      {/* <button onClick={()=>alert('haa ji kese ho')}>Click me</button> */}
       {/* <button onClick={onclick}>click kr </button> */}

       {/* <p onMouseOver={handleMouseOver} style={{color:"green",border:"1px solid black"}}> main para hun jee </p> */}
       <form onSubmit={handleSubmit}>
          <input  type='text' onChange={handleInputChange}></input>
          <button type='submit'>submit </button>
       </form>
       {/* <input  type='text' onChange={handleonChange}></input> */}
    </div>
  )
}

export default App
