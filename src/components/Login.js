import React, { Component } from 'react';
// import API from '../api';
import { Col, form, FormGroup, FormControl, HelpBlock, ControlLabel, Button } from 'react-bootstrap';
// import axios from 'axios';
import { login } from '../api/utils';

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
			Username: this.state.email,
			Password: this.state.password
		}
		var response = await login(user);
		if(response.success) {
			localStorage.setItem('ACCESS_TOKEN', response.accessToken);
      this.props.onLogin();
		} else {
			console.log(response.message);
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
