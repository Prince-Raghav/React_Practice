import React from 'react'

const Card = (props) => {
  return (
    <div>
      <h1>{props.count}</h1>
      
      <button onClick={() => props.setCount(props.count + 1)}>Click me</button>
    </div>
  )
}

export default Card
