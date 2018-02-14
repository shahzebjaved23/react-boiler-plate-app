import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export class AppNavbar extends Component{
	render(){
		return (
			<div>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to="/">Home</Link>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<li role="presentation">
							<Link style={{ height: "" }} to="/about">About</Link>
						</li>
						<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
							<MenuItem eventKey={3.1}>Action</MenuItem>
							<MenuItem eventKey={3.2}>Another action</MenuItem>
							<MenuItem eventKey={3.3}>Something else here</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.4}>Separated link</MenuItem>
						</NavDropdown>
					</Nav>
				</Navbar>;
			</div>
		)
	}
}