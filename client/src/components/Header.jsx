import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <Link to="/"><p id="app-title"><span id="title1">Back Home</span> <span id="title2">Listings</span></p></Link>
      <p id="vr" />
      <p id="sub-title">Welcome</p>
      <nav>
        {
          props.currentUser
            ?
            <>
              You are logged in
            </>
            :
            <Link to="/login"><button variant="primary">Login</button></Link>
        }
      </nav>
      
    </header >
  )
}