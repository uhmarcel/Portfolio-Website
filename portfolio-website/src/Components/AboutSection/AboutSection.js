import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { getProfilePicture } from '../../Utilities/repositoryUtils';
import BrandLinks from '../BrandLinks/BrandLinks';
import '../../Assets/theme.css';
import './AboutSection.css';

class AboutSection extends Component {

    render() {
        const profilePicture = getProfilePicture();
        const { scrollTo } = this.props;
        return (
            <div className='pt-5 pb-5'>
                <Container>
                    <h1 className='sectionTitle lead'>About me</h1>
                    <div className='line mb-4'/>
                    <Row className='pb-5'>
                        <Col md='3' className='p-3 pt-5 text-center'>
                            <img className='profilePicture' src={profilePicture} alt={"That's me"} />
                        </Col>
                        <Col md='4' className='p-5'>
                            <p className='font-weight-bold header'>Hi</p>
                            <p>My name is Marcel Riera. I'm a Senior student of Computer Science at Florida International University. I enjoy the process of engineering software, coming up with logic systems to solve problems.</p>
                            <p>I've developt desktop, mobile and web applications. If you are interested, you can check some of the <span className='btn-link' onClick={() => scrollTo('proj')}>projects</span> I've done below.</p>

                        </Col>
                        <Col md='4' className='p-5'>
                            <p className='font-weight-bold header'>My personal interests</p>
                            <p>Besides working on projects, I also enjoy music. I've played guitar for 10 years and I enjoy spending time composing and playing songs on my free time. </p>
                            <BrandLinks className='text-muted'/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default AboutSection;