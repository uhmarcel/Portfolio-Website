import React, { Component, Fragment } from 'react';
import Banner from '../../Components/Banner/Banner';
import ServicesSection from '../../Components/ServicesSection/ServicesSection';
import TechnicalSection from '../../Components/TechnicalSection/TechnicalSection';
import AboutSection from '../../Components/AboutSection/AboutSection';
import ContactSection from '../../Components/ContactSection/ContactSection';

class HomePage extends Component {

    render() {
        return (
            <Fragment>
                <Banner />
                <ServicesSection />
                <AboutSection />
                <TechnicalSection />
                <ContactSection />
            </Fragment>
        );
    }

}

export default HomePage;