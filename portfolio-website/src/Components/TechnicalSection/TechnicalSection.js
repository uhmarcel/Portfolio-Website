import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../Assets/theme.css';
import './TechnicalSection.css';

class TechnicalSection extends Component {

    render() {
        return (
            <div className='technicalSection pt-5 pb-5'>
                <Container>
                    <h1 className='sectionTitle lead'>Technical Skills</h1>
                    <div className='line mb-5'/>
                    <p className='text-center'>Over time I've learnt and used different programming languages on projects.</p>
                    <Row className='pb-5'>
                        <Col md='6' className='pl-5 pt-4'>
                            <p className='font-weight-bold header'>Languages</p>
                            <ul>
                                <li>Java</li>
                                <li>C/C++</li>
                                <li>Python</li>
                                <li>Javascript</li>
                                <li>C#</li>
                                <li>F#</li>
                                <li>SQL</li>
                                <li>PHP</li>
                                <li>CSS</li>
                                <li>Matlab</li>
                            </ul>
                        </Col>
                        <Col md='6' className='pl-5 pt-4'>
                        <p className='font-weight-bold header'>Technologies</p>
                            <ul>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>ASP.NET</li>
                                <li>MySQL</li>
                                <li>MS SQL</li>
                                <li>MongoDB</li>
                                <li>Rest</li>
                                <li>JavaFX</li>
                                <li>Heroku</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default TechnicalSection;