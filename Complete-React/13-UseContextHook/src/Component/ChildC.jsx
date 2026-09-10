import React,{useContext} from 'react'
// import { UserContext } from '../App'
import { ThemeContext } from '../App'

const ChildC = () => {
    // const user=useContext(UserContext);
    const {theme,setTheme}=useContext(ThemeContext);
    function handleClick(){
        if(theme=='light'){
            setTheme('dark');
        } else {
            setTheme('light');n
        }
    }
  return (
    <div>
        <button onClick={handleClick}>Change Theme</button>
    </div> 

    // <div>
    // {user.name}
    // </div>
  )
}

export default ChildC
