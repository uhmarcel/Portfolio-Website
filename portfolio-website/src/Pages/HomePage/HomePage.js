import React, { Component, Fragment } from 'react';
import Banner from '../../Components/Banner/Banner';
import ServicesSection from '../../Components/ServicesSection/ServicesSection';

class HomePage extends Component {

    render() {
        return (
            <Fragment>
                <Banner />
                <ServicesSection />
            </Fragment>
        );
    }

}

export default HomePage;