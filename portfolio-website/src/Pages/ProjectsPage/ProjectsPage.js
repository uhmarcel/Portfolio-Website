import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjectItem from '../../Components/ProjectItem/ProjectItem';
import ProjectItem2 from '../../Components/ProjectItem/ProjectItem2';

class ProjectsPage extends Component {

    

    render() {
        const img = 'https://cdn.shopify.com/s/files/1/1297/3303/products/21-hardwood-player-s-chessboard-with-2-25-squares-jlp-usa-21184577793_grande.jpg?v=1516082090';

        const projectJSON = [{
                name: 'chess-engine-CLI',
                description: 'A chess engine bla'
            },{
                name: 'github-engine-CLI',
                description: 'bla'
            },{
                name: 'fibonacci-comparison',
                description: 'bla'
            },{
                name: 'android-2d-sidescroll-game',
                description: 'bla'
            },{
                name: 'turing-machine-simulation',
                description: 'bla'
            },{
                name: 'pokemon-database',
                description: 'bla'
            },{
                name: 'dungeon-cards',
                description: 'bla'
            }
        ]

        return (
            <Container>
                <Row>
                    <Col md='4'>
                        <ProjectItem2 img={img} title={'project 1'} description={'hello world'} />
                    </Col>
                    <Col md='4'>
                        <ProjectItem2 img={img} title={'project 1'} description={'hello world'} />
                    </Col>
                    <Col md='4'>
                        <ProjectItem2 img={img} title={'project 1'} description={'hello world'} />
                    </Col>
                </Row>
                <Row>
                    <Col md='4'>
                        <ProjectItem img={img} title={'project 1'} description={'hello world'} />
                    </Col>
                    <Col md='4'>
                        <ProjectItem img={img} title={'project 1'} description={'hello world'} />
                    </Col>
                    <Col md='4'>
                        <ProjectItem img={img} title={'project 1'} description={'hello world'} />
                    </Col>
                </Row>
                <Row>
                    <Col md='4'>
                        <ProjectItem img={img} title={'project 1'} description={'hello world'} />
                    </Col>
                    <Col md='4'>
                        <ProjectItem img={img} title={'project 1'} description={'hello world'} />
                    </Col>
                    <Col md='4'>
                        <ProjectItem img={img} title={'project 1'} description={'hello world'} />
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default ProjectsPage;