import React, { Component } from 'react';
// import API from '../api';
import { Col, form, FormGroup, FormControl, HelpBlock, ControlLabel, Button } from 'react-bootstrap';
// import axios from 'axios';
import { login } from '../api/utils';
// import { Form, Input, Button, Icon, notification } from 'antd';
import { ACCESS_TOKEN } from '../api/const';


export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	validateForm = () => {
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
			usernameOrEmail: this.state.email,
			password: this.state.password
		}
		

		// try {
		//     var response = await login(user);
		//     localStorage.setItem('ACCESS_TOKEN', response.response.accessToken);
  //     		this.props.onLogin();
		// } catch(e) {
		//     console.log(e);
		// }

		// if(response.success) {
		// const loginRequest = Object.assign({}, values);
		try {
			const response = await login(user);
			//localStorage.setItem('accessToken', response.accessToken);
			console.log('hello bitch');
			// this.props.onLogin();
		} catch (err) {
			console.log(err);
			console.log("hkkgkSHIT IS NOT REAL");
		}
		

		// console.log(user);
		// const result = await axios.post("http://85.117.127.113:8080/api/auth/login", { user } );
		// console.log('here')
		// console.log(result);
		// if (result.success) {
		// 	localStorage.setItem('user', user.email);
		// 	localStorage.setItem('token', result.accessToken);
		// 	console.log(result.message);
		// 	// localStorage.setItem("token", )
		//
		// }
	}

  FieldGroup = ({ id, label, help, ...props })  => {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

	render() {
		return (
      <div className="Login">
        <Col xs={6} md={4}>
    			<form onSubmit = {this.handleSubmit}>
            <FormGroup controlId="email">
              <FormControl
                autoFocus
                type="email"
                placeholder='Email'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password">
              <FormControl
                  type="password"
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.handleChange}
              />
            </FormGroup>
            <Button block type="submit" disabled={!this.validateForm()}>Sign In</Button>
    			</form>
        </Col>
      </div>
		)
	}

}

//
// <div className="input-field">
//   <Input
//     type="email"
//     id="email"
//     label="Email"
//     value={this.state.email}
//     onChange={this.handleChange}
//   />
// </div>
// <div className="input-field">
//   <Input
//     type="password"
//     id="password"
//     label="Password"
//     value={this.state.password}
//     onChange={this.handleChange}
//   />
// </div>
// <div className="input-field">
//   <Input
//     type="submit"
//     className="btn-large waves-effect waves-dark"
//     id="login_button"
//     value="Login"
//     disabled={!this.validateForm()}
//   />
//   </div>
