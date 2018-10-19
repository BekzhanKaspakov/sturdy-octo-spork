import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

// components
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import Auth from './components/Auth';
import NavBar from './components/NavBar'

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    }
		this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
	}

	loadCurrentUser() {
    this.setState({
      isLoading: true
    });
    // getCurrentUser()
    // .then(response => {
    //   this.setState({
    //     currentUser: response,
    //     isAuthenticated: true,
    //     isLoading: false
    //   });
    // }).catch(error => {
    //   this.setState({
    //     isLoading: false
    //   });
    // });
  }

	handleLogin() {
	    // this.loadCurrentUser();
	    this.props.history.push("/");
	  }

	handleLogout(redirectTo="/") {
	    localStorage.removeItem('ACCESS_TOKEN');
			this.setState({
      	currentUser: null,
      	isAuthenticated: false
    	});
	}

  render() {
    return (
			<BrowserRouter>
			<div>
				<NavBar isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} onLogout={this.handleLogout} />
				<Route exact path="/" render = { props => <Main {...props} />} />
				<Route exact path="/authenticate" render = { props => <Auth {...props} />} />
				<Route exact path='/login' render = { props => <Login onLogin={this.handleLogin} {...props} />} />
				<Route exact path='/register' render = { props => <Register {...props} />} />
			</div>
			</BrowserRouter>
    );
  }
}

export default App;
