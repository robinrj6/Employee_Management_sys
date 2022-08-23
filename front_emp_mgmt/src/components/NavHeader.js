import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

class NavHeader extends Component {

    render() {
        return (
            <div className="header">
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Employee Manager
                            <Link to="/" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto" navbarScroll>
                                <Nav.Link href="home">Home
                                    <Link to="/login" /></Nav.Link>
                                <Nav.Link href="list">List
                                <Link to="/list" /></Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex" method="" >
                                <Button variant="success" id="login" name="login" className="btn" href="/login">Login
                                    <Link to="/login" />
                                </Button>
                                <Button variant="danger" id="signup" name="signup" className="btn" href="/signup">Signup
                                    <Link to="/signup" />
                                </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
export default NavHeader;