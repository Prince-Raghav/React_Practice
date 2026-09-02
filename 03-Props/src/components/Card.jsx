import React from 'react'


const Card = (props) => {
  console.log(props);
  return (
     <div className='card'>
       <img
  src="https://images.unsplash.com/photo-1782935757909-cc220e714ca7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0ODJ8fHxlbnwwfHx8fHw%3D"
  alt="profile"
/>    
  {/* <h1>Prince</h1> */} 
        <h1>{props.user} {props.age}</h1>
        <p>lorem ipsum dolor sit amet</p>
        <button>View Profile</button>
        </div>
  )
}

export default Card
