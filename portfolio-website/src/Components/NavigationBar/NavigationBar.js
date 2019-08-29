import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {

    state = {
        isOpen: false
    };

    toogleNavbar = () => {
        this.setState(prevState => ({isOpen: !prevState.isOpen}));
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand tag={Link} to='/'>MarcelRiera.me</NavbarBrand>
                    <NavbarToggler onClick={this.toogleNavbar} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to='/'>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to='/projects'>Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to='/about'>About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/uhmarcel" target="_blank">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default NavigationBar;