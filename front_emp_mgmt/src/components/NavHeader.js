import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import { Outlet } from 'react-router-dom';

class NavHeader extends Component {

    render() {
        return (
            <div className="header">
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Employee Manager
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto" navbarScroll>
                                <Nav.Link href="home">Home
                                </Nav.Link>
                                <Nav.Link href="list">List
                                </Nav.Link>
                                <Nav.Link href="actions">Actions
                                </Nav.Link>
                            </Nav>
                            <Outlet />
                            <Form className="d-flex" method="" >
                                <Button variant="success" id="login" name="login" className="btn" href="login">Login
                                </Button>
                                <Button variant="danger" id="signup" name="signup" className="btn" href="signup">Signup
                                </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
        );
    }
}
export default NavHeader;