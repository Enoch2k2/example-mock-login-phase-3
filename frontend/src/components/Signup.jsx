import React, { useState } from 'react'
import Login from './Login';

const Signup = ({ login }) => {
  const [username, setUsername] = useState("")

  const handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:9292/signup', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username })
    })
      .then(resp => resp.json())
      .then(data => login(data))
  }

  return (
    <div>
      <h3>Signup</h3>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" value={ username } onChange={ e => setUsername(e.target.value) } />
        </div>

        <input type="submit" value="Signup" />
      </form>
    </div>
  )
}

export default Signup