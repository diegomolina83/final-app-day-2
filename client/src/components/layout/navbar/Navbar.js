import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import logo from './logo.png'

import authService from './../../../service/auth.service'


export default class extends Component {

    constructor(props) {
        super(props)
        this.authService = new authService()
    }

    logoutUser = () => {
        this.authService
            .logout()
            .then(() => this.props.setTheUser(null))
            .catch(err => console.log('ERRORR!!:', err))
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" style={{ marginBottom: '40px' }}>
                <Link to="/">
                    <Navbar.Brand>
                        <img
                            alt="Logotipo"
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                Coaster Nation!
                </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/">Inicio</Link>
                        <Link className="nav-link" to="/coasters">Montañas rusas</Link>
                        {!this.props.loggedInUser && <Link className="nav-link" to="/signup">Registro</Link>}
                        {!this.props.loggedInUser && <Link className="nav-link" to="/login">Acceder</Link>}
                        {this.props.loggedInUser && <div className="nav-link" onClick={this.logoutUser}>Cerrar sesión</div>}
                        <Link className="nav-link" to="/profile">- Hola, {this.props.loggedInUser ? this.props.loggedInUser.username : 'invitado'}</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}

