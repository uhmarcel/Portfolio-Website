import React, { Component } from 'react';
import BrandLinks from '../BrandLinks/BrandLinks';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <div id="footer">
                <div className="container">
                    <BrandLinks />
                    <p className="footer-block text-small text-muted">Marcel Riera © 2019</p>
                </div>
            </div>
        );
    }

}

export default Footer;