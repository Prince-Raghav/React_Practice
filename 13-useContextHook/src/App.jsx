import React from 'react'
import ChildA from './Component/ChildA' 
import './index.css'
import { createContext, useState } from 'react' 


// step 1: create context
// const UserContext=createContext();
// step 2: wrap all the child inside a provider
// step 3: pass the value
// step 4:consumer ke andar jake consume kr lo

// const UserContext=createContext();
const ThemeContext=createContext();

const App = () => {
  // const [user,setUser]=useState({name:"prince"});
  const[theme,setTheme]=useState("light");
  return (
    <div>
      {/* <UserContext.Provider value={user}>
           <ChildA/>
      </UserContext.Provider> */}
      <ThemeContext.Provider value={{theme,setTheme}}>
           <div id='container' style={{backgroundColor:theme=='light'?"beige":"black"}}>
            <ChildA/>
           </div>
      </ThemeContext.Provider>
    
    </div>
  )
}

export default App
// export {UserContext}
export {ThemeContext}