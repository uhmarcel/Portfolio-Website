import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import ProjectItem from '../ProjectItem/ProjectItem';
import projectsJSON from '../../Assets/projects';

class ProjectsSection extends Component {

    render() {
        return (
            <div className='py-5'>
                <Container className='text-center'>
                    <h1 className='sectionTitle lead'>Some of My Work</h1>
                    <div className='line mb-4'/>
                    <p>Here are some of the projects I've worked on. You can see more at my <a href='https://github.com/uhmarcel' target='_blank' rel='noopener noreferrer'>github</a> page.</p>
                    <Row className='pb-3'>
                        {
                            projectsJSON.projects.map(p => {
                                return(
                                    <Col xs='auto' className='p-0 pl-4 pt-4' key={p.title}>
                                        <ProjectItem 
                                            img={p.img} 
                                            title={p.title}
                                            description={p.description}
                                            technologies={p.technologies} 
                                            github={p.github} 
                                            demo={p.demo} 
                                        />
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </Container>
            </div>
        );
    }

}

export default ProjectsSection;