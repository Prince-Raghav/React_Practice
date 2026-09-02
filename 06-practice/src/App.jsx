import React from 'react'
import Card from './component/Card'
import './index.css'

const App = () => {
  return (
    <div>
      <Card username="harry"  />
      <Card username="ron" />
      <Card username="hermione" />
    </div>
  )
}

export default App