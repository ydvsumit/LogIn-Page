import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [logIn, setLogIn] = useState(localStorage.getItem('loggedIn') == "true" ? true : false);
  const [database, setDatabase] = useState([{ 'username': 'sumit@abc.com', 'password': '12345678' }, { 'username': 'nilesh', 'password': '12345' }]);

  const handleUser = (event) => {
    setUserName(event.target.value);

  }

  const handlePass = (event) => {
    setPassword(event.target.value);
  }

  const handleSingUp = () => {
    const user = { 'username': userName, 'password': password };
    if (userName && password) {
      setDatabase([...database, user]);
      alert(`your account created successfully : \n Username : ${userName} \n Password: ${password}`);
    } else {
      alert('Please fill the Username and Password')
    }
    document.getElementById('login').value = '';
    document.getElementById('password').value = '';
  }

  const handleLogIn = () => {
    try {
      if (database.find(x=> x.username === userName && x.password === password)) {
        setLogIn(true)
        localStorage.setItem('loggedIn', true);
        alert('Successfully Logged In');
        document.getElementById('login').value = '';
        document.getElementById('password').value = '';
      }
      else {
        setLogIn(false);
        alert("Invalid Credentials")
        document.getElementById('login').value = '';
        document.getElementById('password').value = '';
      }
    } catch (err) {
      alert("Invalid Credentials")
    }
  }

  const handleSignOut = () => {
    setLogIn(false);
    localStorage.setItem('loggedIn', false);
    alert("Logged Out Successfully");
  }

  return (
    <>
      <section>
        <div>
          <h1>Enter Credentials Here 😄</h1>
          <label for='login'>UserName</label><br />
          <input placeholder='enter username' id='login' onChange={handleUser} autoComplete='off' required /><br />
          <label for='password'>Password</label><br />
          <input placeholder='enter password' id='password' onChange={handlePass} autoComplete='off' required /><br />
          <button onClick={handleLogIn}>Log In</button>
          <button disabled={!logIn} onClick={handleSignOut}>Sign Out</button><br />
          <h4>Create your account here !!</h4>
          <button onClick={handleSingUp}>Sign Up</button>
        </div>
      </section>
    </>
  )
}

export default App