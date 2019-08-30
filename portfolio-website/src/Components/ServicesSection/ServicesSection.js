import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import softwarePNG from '../../Assets/software.png';
import webdevPNG from '../../Assets/website.png';
import supportPNG from '../../Assets/troubleshoot.png';
import ServicesItem from './ServicesItem/ServicesItem';

class ServicesSection extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row className='pb-5'>
                        <Col md='4'>
                            <ServicesItem img={softwarePNG} title='Software Engineering' description='Customizable software solutions made to fit specific business needs.'/>
                        </Col>
                        <Col md='4'>
                            <ServicesItem img={webdevPNG} title='Web Development' description='Professional website development and design.'/>
                        </Col>
                        <Col md='4'>
                            <ServicesItem img={supportPNG} title='Support' description='On demand support and troubleshooting services.'/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default ServicesSection;