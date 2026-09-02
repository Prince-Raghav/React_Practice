import React from 'react'
import {useState} from 'react'
import LoginBtn from './component/LoginBtn'
import LogoutBtn from './component/LogoutBtn'
const App = () => {
  const[IsLoggedIn,setLoggedIn]=useState(true);
 return(
  <div>
    {/* ternary operator */}
{/* {IsLoggedIn ? <LoginBtn/> : <LogoutBtn/>} */}
       {/* logical operator*/}
       {IsLoggedIn && <LoginBtn/>}
       {!IsLoggedIn && <LogoutBtn/>}
        
  </div>
  
 )


  // if(IsLoggedIn){
  //   return(
  //     <LoginBtn />
  //   )
  // }
  // else{
  //   return(
  //     <LogoutBtn />
  //   )
  // }
}

export default App
