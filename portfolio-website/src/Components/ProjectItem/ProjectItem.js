import React, { Component } from 'react';
import { Modal, ModalBody, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './ProjectItem.css';
import '../../Assets/theme.css';

class ProjectItem extends Component {

    state = {
        modal: false
    }

    toggle = () => {
        this.setState(prevState => ({modal: !prevState.modal}));
    }

    render() {
        const { img, title, description, github, demo } = this.props;
        const technologies = this.props.technologies ? this.props.technologies : [];
        return (
            <div>
                <div className='projectItemDisplay' onClick={this.toggle}>
                    <img src={img} alt={title} />
                </div>
                <Modal size='lg' returnFocusAfterClose isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <div className='float-right' style={{margin: '8px 16px 4px 0'}}>
                        <button className="close" onClick={this.toggle}>&times;</button>
                    </div>
                    <ModalBody className='mt-0 pt-0'>
                        <Row className='px-md-1 pb-md-3'>
                            <Col md='5' className='text-center '> 
                                <img className='projectModalImg' src={img} alt={title} />
                            </Col>
                            <Col md='7'>
                                <p className='mt-4 mt-md-0 lead'>{title}</p>
                                <p className='mt-3'>{description}</p>
                                <hr className='my-2 mt-2 mt-md-4'/>
                                <Row>
                                    {technologies.map(t => {
                                        return (
                                            <Col className='text-center' key={t}>
                                                <span className='technologies'>{t}</span>
                                            </Col>
                                        )
                                    })}
                                </Row>
                                <hr className='my-2 mb-3 mb-md-4'/>
                                <Row className='m-auto w-75 text-center'>
                                    <Col>
                                        <a href={demo} target='_blank' rel="noopener noreferrer" className='darkFont'>
                                            <FontAwesomeIcon className='button' icon={faExternalLinkAlt} size='lg' />
                                        </a>
                                    </Col>
                                    <Col>
                                        <a href={github} target='_blank' rel="noopener noreferrer" className='darkFont'>
                                            <FontAwesomeIcon className='button' icon={faGithub} size='lg' />
                                        </a>
                                    </Col>
                                    <Col>
                                        <FontAwesomeIcon className='button' icon={faTimes} size='lg' onClick={this.toggle} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}

export default ProjectItem;