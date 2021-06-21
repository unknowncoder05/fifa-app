import './../../App.css'
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <Navbar expand="lg" variant="dark" className="blueBackground" >
                <Container>
                    <Navbar.Brand href="home"><img className="eaLogo" src="https://www.fifplay.com/img/public/fifa-21-logo-white.png"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="players">Players</Nav.Link>
                            <Nav.Link href="teams">Teams</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            );
    }
}
export default Header;