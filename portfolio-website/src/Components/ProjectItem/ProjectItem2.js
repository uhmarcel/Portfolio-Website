import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class ProjectItem2 extends Component {

    render() {
        const { img, title, description } = this.props;
        return (
            <div>
            <Card>
              <CardImg top className='w-100 h-100' src={img} alt={title} />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>

            // <div class='box2 grayAnim' onclick="location.href=root+'projects/queens.html'">
            //     <div class='box-display'>
            //         <img src={img} alt={title} />
            //     </div>
            //     <div>
            //         <h3>{title}</h3>
            //         <p>{description}</p>
            //     </div>
            // </div>
        );
    }

}

export default ProjectItem2;