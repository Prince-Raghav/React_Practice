import React from 'react'
import Card from './component/Card'

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
     <Card count={count} setCount={setCount} />
    </div>
  )
}

export default App
