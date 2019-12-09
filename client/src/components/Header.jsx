import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import Profile from './Profile'

export default function Header(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <header>
      <Link to="/"><p id="app-title"><span id="title1">Foster Meow!</span> <span id="title2">Listings</span></p></Link>
      <p id="vr" />
      <p id="sub-title">Come grab a cat or something</p>
      <nav>
        {
          props.currentUser
            ?
            <>
              <i class="im im-user-circle"></i>
              <Dropdown
                alignRight
                title={props.currentUser.firstname}
                id="dropdown-menu-align-right">
                <Dropdown.Item eventKey="1" onClick={() => setModalShow(true)}>View Profile</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={props.handleLogout}>Logout</Dropdown.Item>
              </Dropdown>
            </>
            :
            <Link to="/login"><button className="login-button">Login</button></Link>
        }
      </nav>
      <Profile
        currentUser={props.currentUser}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </header >
  )
}