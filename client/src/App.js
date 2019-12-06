import React from "react";
import { Form, Field } from "simple-react-form";
import { Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Header from './components/Header';
import Home from './components/Home';
import Register from "./components/Register";
import { withRouter } from "react-router";
import { verifyUser, registerUser, loginUser,  } from "./services/api-helper";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      authFormData: {
        username: '',
        password: '',
        email: ''
      }
    }
  }

    async componentDidMount() {
      const currentUser = await verifyUser();

    }

    handleLoginButton = () => {
      this.props.history.push("/login")
    }
  
    handleLogin = async () => {
      const currentUser = await loginUser(this.state.authFormData);
      this.setState({
        currentUser
      })
      this.props.history.push(`/`)
    }
  
  handleRegister = async (e) => {
      e.preventDefault();
      const currentUser = await registerUser(this.state.authFormData);
      this.setState({ currentUser });
      this.props.history.push(`/`)
    }
  
    handleLogout = () => {
      localStorage.removeItem("jwt");
      this.setState({
        currentUser: null
      })
    }
  
    authHandleChange = (e) => {
      const { name, value } = e.target;
      this.setState(prevState => ({
        authFormData: {
          ...prevState.authFormData,
          [name]: value
        }
      }));
    }


  render() {
    return (
      <div className="app">
        <Header currentUser={this.state.currentUser} handleLogout={this.handleLogout} />
        <main className="main">
          {this.state.currentUser ? (
            <Route
              exact
              path="/"
              render={() => <Home currentUser={this.state.currentUser} />}
            />
          ) : (
            <></>
          )}
          <Route exact path="/login" render={() => (
          <LoginForm
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)}
        />

        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData}
          />)}
        />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
