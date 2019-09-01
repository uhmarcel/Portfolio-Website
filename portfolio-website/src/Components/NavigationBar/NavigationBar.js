import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { faGithub, faLinkedinIn, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavigationBar.css';

class NavigationBar extends Component {

    state = {
        isOpen: false
    };

    toogleNavbar = () => {
        this.setState(prevState => ({isOpen: !prevState.isOpen}));
    }

    closeNavbar = () => {
        this.setState({isOpen: false});
    }

    render() {
        const { scrollTo } = this.props;
        return (
            <div className='fixed-top shado'>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand/> 
                    <NavbarToggler onClick={this.toogleNavbar} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className='clickable' onClick={() => {scrollTo('about'); this.closeNavbar();}}>
                                <NavLink>About</NavLink>
                            </NavItem>
                            <NavItem className='clickable' onClick={() => {scrollTo('serv'); this.closeNavbar();}}>
                                <NavLink>Services</NavLink>
                            </NavItem>
                            <NavItem className='clickable' onClick={() => {scrollTo('tech'); this.closeNavbar();}}>
                                <NavLink>Skills</NavLink>
                            </NavItem>
                            <NavItem className='clickable' onClick={() => {scrollTo('proj'); this.closeNavbar();}}>
                                <NavLink>Projects</NavLink>
                            </NavItem>
                            <NavItem className='clickable' onClick={() => {scrollTo('cont'); this.closeNavbar();}}>
                                <NavLink>Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/resume.pdf' target='_blank' rel='noopener noreferrer'>Resume</NavLink>
                            </NavItem>
                            <NavItem className='pl-md-2'> 
                                <div className='brandContainer'>
                                    <a href='https://www.twitter.com/' target='_blank' rel='noopener noreferrer' className='brandNavbar'>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' className='brandNavbar'>
                                        <FontAwesomeIcon icon={faFacebookF}/>
                                    </a>
                                    <a href='https://www.github.com/uhmarcel/' target='_blank' rel='noopener noreferrer' className='brandNavbar'>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                    <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer' className='brandNavbar'>
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </div>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default NavigationBar;