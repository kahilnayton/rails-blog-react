import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

// ***** Routing *******
import AnimalsAll from './components/AnimalsAll';
import AnimalsMine from './components/AnimalsMine';
import AnimalsSaved from './components/AnimalsSaved';
import AnimalAdd from './components/AnimalAdd';
import { Route, Link } from 'react-router-dom';

// ****** Auth *********
import LoginForm from './components/LoginForm';
import Register from './components/Register';
import { withRouter } from 'react-router';
import { verifyUser } from './services/api-helper';
import Home from './components/Home';
import AnimalDetails from './components/AnimalDetails';
import AnimalEdit from './components/AnimalEdit';

const App = (props) => {
  const [currentUser, setcurrentUser] = useReducer(null);

  const setUser = (user) => {
    setcurrentUser(user);
    props.history.push("/")
  }

  const handleLogout = () => {
    setcurrentUser(null);
    localStorage.removeItem('authToken');
    props.history.push("/login");
  }
  const verify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }
  useEffect(() => {
    verify();
    if (!currentUser) props.history.push("/login");
  }, []);


  return (
    <div className="app" >
      <Header
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <main className="main">
        {
          currentUser ?
            <Route exact path="/" render={() =>
              <Home
                currentUser={currentUser} />} />
            :
            <></>
        }
        <Route path="/login" render={() => (
          <LoginForm
            setUser={setUser} />
        )} />
        <Route path="/register" render={() => (
          <Register
            setUser={setUser}
          />)} />
        <Route exact path="/animal-details/:animalId" render={(props) =>
          <AnimalDetails
            animalId={props.match.params.animalId}
            currentUser={currentUser}
          />
        
        } />
        <Route exact path="/edit-animal/:animalId" render={(props) =>
          <AnimalEdit
            animalId={props.match.params.animalId}
            currentUser={currentUser}
          />} />
        <Route exact path="/listings-all" render={(props) => <AnimalsAll currentUser={currentUser} />} />
        <Route exact path="/listings-mine" render={(props) => <AnimalsMine currentUser={currentUser} />} />
        <Route exact path="/listings-saved" render={(props) => <AnimalsSaved currentUser={currentUser} />} />
        <Route exact path="/listing-add" render={(props) => <AnimalAdd />} />
      </main >
      <Footer />
    </div>
  );
}

export default withRouter(App);