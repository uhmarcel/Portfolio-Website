import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../Assets/theme.css';
import './TechnicalSection.css';

class TechnicalSection extends Component {

    render() {
        const { scrollTo } = this.props;
        return (
            <div className='technicalSection pt-5 pb-5'>
                <Container>
                    <h1 className='sectionTitle lead'>Technical Skills</h1>
                    <div className='line mb-5'/>
                    <p className='text-center'>Over time I've learnt and used different languages and technologies. Some of them I've learnt along my career studies, others I've learnt by myself. <br/>You can check <span className='btn-link' onClick={() => scrollTo('proj')}>projects</span> using this technologies below, or at my <a href='https://github.com/uhmarcel' target='_blank' rel='noopener noreferrer'>github</a> page.</p>
                    <Row className='pb-5'>
                        <Col md='4' className='pl-5 pt-4'>
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
                        <Col md='4' className='pl-5 pt-4'>
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
                                <li>Jest.js</li>
                            </ul>
                        </Col>
                        <Col md='4' className='pl-5 pt-4'>
                        <p className='font-weight-bold header'>Process</p>
                            <ul>
                                <li>Azure DevOps</li>
                                <li>Scrum</li>
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