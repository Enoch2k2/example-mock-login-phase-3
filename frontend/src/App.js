import React, { useState } from "react";
import { useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem('user_id');

    if(id) {
      fetch('http://localhost:9292/users/' + id)
        .then(resp => resp.json())
        .then(data => {
          if(!data.message) {
            login(data);
          }
        })
    }
  }, [])

  const login = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
    localStorage.setItem('user_id', user.id)
  }
  
  const logout = () => {
    setCurrentUser({});
    setIsLoggedIn(false);
    localStorage.removeItem('user_id')
  }

  const renderLoggedIn = () => {
    if(isLoggedIn) {
      return (
        <>
          <h3>You are logged in as { currentUser.username }</h3>
          <button onClick={ logout }>Logout</button>
        </>
      )
    } else {
      return (
        <>
          <Signup login={ login } />
          <Login login={ login } />
        </>
      )
    }
  }

  return (
    <div className="App">
     {renderLoggedIn()}
    </div>
  );
}

export default App;
