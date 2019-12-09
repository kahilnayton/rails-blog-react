import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../services/api-helper';

const Register = (props) => {

  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (username, email, password) => {
    try {
      const data = {
        username: username,
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        location: location
      };
      const currentUser = await registerUser(data);
      props.setUser(currentUser);
    }
    catch (err) {
      setErrorMessage(`Error ${err.response.status} - Invalid credentials`);
    }
  }

  return (
    <>
      <form className="form-login" onSubmit={(e) => {
        e.preventDefault();
        handleRegister(username, email, password);
      }} >
        <h1><span className="log-in">Log in</span> or <span className="register">register</span></h1>
        <p className="float">
          <label for="login">Username</label>
          <input type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
        </p>
        <p className="float">
          <label for="login">First Name</label>
          <input type='text' value={firstname} onChange={e => setFirstname(e.target.value)} placeholder="First Name" />
        </p>
        <p className="float">
          <label for="login">Last Name</label>
          <input type='text' value={lastname} onChange={e => setLastname(e.target.value)} placeholder="Last Name" />
        </p>
        <p className="float">
          <label for="email">Email</label>
          <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        </p>
        <p className="float">
          <label for="location">Location</label>
          <input type='text' value={location} onChange={e => setLocation(e.target.value)} placeholder="Location City,State" />
        </p>
        <p className="float">
          <label for="password">Password</label>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="showpassword" />
        </p>
        <p className="clearfix">
          <input type="submit" name="submit" value="Register" />
          <Link to="/login"><span className="register">login</span></Link>
        </p>
      </form>
      <br />
      <p>{errorMessage}</p>
    </>
  )
}

export default Register;