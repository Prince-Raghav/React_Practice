import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.username}</h1>

      <img
        id="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
        alt="Microsoft Logo"
      />

      <h3>Software Engineer</h3>
    </div>
  )
}

export default Card