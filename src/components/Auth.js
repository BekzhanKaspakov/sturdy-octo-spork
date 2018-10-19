import React from 'react';
import { Col } from 'react-materialize';
import Login from './Login';
import Register from './Register';

const AuthForm = () => {
	return (
		<Col>
			<div className="card hoverable">
				<div className='card-tabs'>
					<ul className="tabs tabs-fixed-width">
							<li className="tab"><a className="active" href="#login_div">Login</a></li>
							<li className="tab"><a href="#register_div">Register</a></li>
					</ul>
				</div>
				<div className="card-content grey lighten-4">
					<div id="login_div">
						<Login />
					</div>
					<div id="register_div">
						<Register />
					</div>
				</div>
			</div>
		</Col>
	)
}

export default AuthForm;
