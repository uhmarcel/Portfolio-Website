import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <div id="footer" className='bg-light'>
                <div className="container">
                    <p className="footer-block text-small text-muted">Marcel Riera © 2019</p>
                </div>
            </div>
        );
    }

}

export default Footer;