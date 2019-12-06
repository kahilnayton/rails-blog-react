import React from 'react';

// This component handles our register form
const Register = (props) => {

  return (
    <div className="wrapper">

      <div className="auth-container">
        <h1>Register</h1>
        <hr />
        <form onSubmit={props.handleRegister} >
          <p>Username:</p>
          <input
            name="username"
            type="text"
            value={props.formData.username}
            placeholder="username"
            onChange={props.handleChange} />

          <p>Password:</p>
          <input
            name="password"
            type="password"
            value={props.formData.password}
            placeholder="password"
            onChange={props.handleChange} />

          <p>Email:</p>
          <input
            name="email"
            type="text"
            value={props.formData.email}
            placeholder="email"
            onChange={props.handleChange} />
          <hr />
          <button>Register</button>
        </form>
      </div>
    </div>

  );
}

export default Register;