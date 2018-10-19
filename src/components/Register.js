import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import API from '../api/api';
import { Col, form, FormGroup, FormControl, HelpBlock, ControlLabel, Button } from 'react-bootstrap';
// import axios from 'axios'
import { signup } from '../api/utils'


export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			password: ""
		};
	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});

	}
	handleSubmit = async (e) => {
		e.preventDefault();
		const user = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			username: this.state.email,
			password: this.state.password
		}
		console.log(user)
		// const response = await API.post("/auth/register", { user });
		var response = await signup(user);
		console.log(response)
		if (response.success) {
			this.props.history.push("/login");
		} else {
			alert(response.message);
		}
	}

	render() {
    return (
      <Col xs={6} md={4}>
  			<form onSubmit = {this.handleSubmit}>
          <FormGroup controlId="formControlEmail">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              placeholder = "Enter your email address"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="formControlPassword">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              placeholder = "Enter your password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button block type="submit">Sign In</Button>
  			</form>
      </Col>
		)


	}
}

// <form onSubmit = {this.handleSubmit}>
//   <div className="input-field">
//       <Input
//         type="text"
//         id="firstName"
//         label="First Name"
//         value={this.state.firstName}
//         onChange={this.handleChange}
//       />
//   </div>
//   <div className="input-field">
//       <Input
//         type="text"
//         id="lastName"
//         label="Last Name"
//         value={this.state.lastName}
//         onChange={this.handleChange}
//       />
//   </div>
//   <div className="input-field">
//       <Input
//         type="email"
//         id="email"
//         label="Email"
//         value={this.state.email}
//         onChange={this.handleChange}
//       />
//   </div>
//   <div className="input-field">
//       <Input
//         type="password"
//         id="password"
//         label="Password"
//         value={this.state.password}
//         onChange={this.handleChange}
//       />
//   </div>
//   <div className="input-field">
//       <button
//         className="btn-large waves-effect waves-dark"
//         id="register"
//         value ="Register"
//         disabled={!this.validateForm()}
//       />
//       </div>
// </form>
