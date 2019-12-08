import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../services/api-helper';

const LoginForm = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (username, password) => {
    try {
      const data = { username: username, password: password };
      const currentUser = await loginUser(data);
      props.setUser(currentUser);
    }
    catch (err) {
      setErrorMessage(`Error ${err.response.status} - Invalid credentials`);
    }
  }

  return (
    <section className='login-form'>
      <form className="form-login" onSubmit={(e) => {
        e.preventDefault();
        handleLogin(username, password);
      }} >
        <h1><span className="log-in">Log in</span> or <span className="register">register</span></h1>
        <p className="float">
          <label for="login">Username</label>
          <input id='name' type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder="Username or email" />
        </p>
        <p className="float">
          <label id='password' for="password">Password</label>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="showpassword" />
        </p>
        <p className="clearfix">
        <input type="submit" name="submit" value="Log in" />
          <Link to="/register"><span className="register">register</span></Link>
        </p>
      </form>
      <br />
      <p>{errorMessage}</p>
    </section>
  )
}

export default LoginForm;