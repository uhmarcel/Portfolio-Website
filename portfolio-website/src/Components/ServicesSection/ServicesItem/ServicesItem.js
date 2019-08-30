import React, { Component } from 'react';
import './ServicesItem.css';

class ServicesItem extends Component {
    
    render() {
        const {img, title, description} = this.props;
        return (
            <div className='container text-center pt-5'>
                <img src={img} alt={title}  />
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        );
    }

}

export default ServicesItem;