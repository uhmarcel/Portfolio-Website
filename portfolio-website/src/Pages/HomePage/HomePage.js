import React, { Component, Fragment } from 'react';
import Banner from '../../Components/Banner/Banner';
import ServicesSection from '../../Components/ServicesSection/ServicesSection';
import TechnicalSection from '../../Components/TechnicalSection/TechnicalSection';
import AboutSection from '../../Components/AboutSection/AboutSection';
import ContactSection from '../../Components/ContactSection/ContactSection';
import ProjectsSection from '../../Components/ProjectsSection/ProjectsSection';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import scrollToComponent from 'react-scroll-to-component';

class HomePage extends Component {

    scrollToSection = (section) => {
        switch (section) {
            case 'about': scrollToComponent(this.about, {align: 'top'}); break;
            case 'tech': scrollToComponent(this.tech, {align: 'top'}); break;
            case 'proj': scrollToComponent(this.proj, {align: 'top'}); break;
            case 'cont': scrollToComponent(this.cont, {align: 'top'}); break;
        }
    }

    render() {
        return (
            <Fragment>
                <NavigationBar scrollTo={this.scrollToSection} />
                <Banner />
                <ServicesSection />
                <hr className='my-2' />
                <AboutSection scrollTo={this.scrollToSection} ref={(r) => this.about=r} />
                <hr className='my-2' />
                <TechnicalSection ref={(r) => this.tech=r}/>
                <hr className='my-2' />
                <ProjectsSection ref={(r) => this.proj=r}/>
                <hr className='my-2' />
                <ContactSection ref={(r) => this.cont=r}/>
            </Fragment>
        );
    }

}

export default HomePage;