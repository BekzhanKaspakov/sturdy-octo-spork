import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBar extends Component {
	render() {
		return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Brand</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
            Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
          </Navbar.Text>
          <Navbar.Text pullRight>
            <Navbar.Link href="/register">Sign Up</Navbar.Link>
          </Navbar.Text>
          <Navbar.Text pullRight>
            <Navbar.Link href="/login">Sign In</Navbar.Link>
          </Navbar.Text>

        </Navbar.Collapse>
      </Navbar>
		);
	}
}

export default NavBar;
