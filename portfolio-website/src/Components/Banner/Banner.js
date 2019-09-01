import React, { Component } from 'react';
import { Container, Fade } from 'reactstrap';
import './Banner.css';
import BrandLinks from '../BrandLinks/BrandLinks';

class Banner extends Component {

    render() {
        return (
            <div>
                <div className='bannerContainer pt-5 m-0 text-uppercase'>
                    <Container className='justify-content-center align-self-center text-center pb-5'>
                        <Fade>
                            <h1 className="bannerTitle">Marcel Riera</h1>
                            <hr className="my-2" />
                            <p className='lead'>Software Engineering</p>
                            <BrandLinks/>
                        </Fade>
                    </Container>
                </div>
                <div className='bg-dark' style={{height: '3px'}}/>
          </div>
        );
    }

}

export default Banner;

