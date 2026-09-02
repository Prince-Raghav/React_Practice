import React from 'react'
import './index.css'
import Card from './components/Card'

const App = (props) => {
  
  return (

    <div className='parent'>
        <Card user='prince' age={25}/>
        <Card user='raghav' age={21}/>
        
    </div>
  )
}

export default App
