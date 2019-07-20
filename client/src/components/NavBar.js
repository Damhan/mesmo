import React, {Component} from 'react';
import {
    Navbar,
    Nav,
} from 'react-bootstrap'

class NavBar extends Component {

    render() {
        return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand href="#home">mesmo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#signup">Sign Up</Nav.Link>
                <Nav.Link href="#login">Log in</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }

}

export default NavBar;