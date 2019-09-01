import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import ProjectItem from '../ProjectItem/ProjectItem';
import projectsJSON from '../../Assets/projects';

class ProjectsSection extends Component {

    render() {
        const img = 'https://cdn.shopify.com/s/files/1/1297/3303/products/21-hardwood-player-s-chessboard-with-2-25-squares-jlp-usa-21184577793_grande.jpg?v=1516082090';
        console.log(projectsJSON);
        return (
            <div className='pt-5 pb-5'>
                <Container className='text-center'>
                    <h1 className='sectionTitle lead'>Some of My Work</h1>
                    <div className='line mb-4'/>
                    <p>Interested in building a project together? <br/>You can reach me at <b>contact@marcelriera.me</b>, or you can fill the form below.</p>
                    <Row>
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