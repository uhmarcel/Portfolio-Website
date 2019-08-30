import React, { Component } from 'react';
import './ProjectItem.css';

class ProjectItem extends Component {

    render() {
        const { img, title, description } = this.props;
        return (
            <div class='box2 grayAnim' onclick="location.href=root+'projects/queens.html'">
                <div class='box-display'>
                    <img src={img} alt={title} />
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        );
    }

}

export default ProjectItem;