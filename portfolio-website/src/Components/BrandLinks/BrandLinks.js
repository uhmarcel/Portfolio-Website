import React, { Component } from 'react';
import { faGithub, faLinkedinIn, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BrandLinks.css';


class BrandLinks extends Component {

    render() {       
        return (
            <div>
                <a href='https://www.twitter.com/' target='_blank' rel='noopener noreferrer' className='brandIcon'>
                    <FontAwesomeIcon icon={faTwitter} size='lg'/>
                </a>
                <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' className='brandIcon'>
                    <FontAwesomeIcon icon={faFacebookF} size='lg'/>
                </a>
                <a href='https://www.github.com/uhmarcel/' target='_blank' rel='noopener noreferrer' className='brandIcon'>
                    <FontAwesomeIcon icon={faGithub} size='lg'/>
                </a>
                <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer' className='brandIcon'>
                    <FontAwesomeIcon icon={faLinkedinIn} size='lg'/>
                </a>
            </div>
        );
    }

}             

export default BrandLinks;