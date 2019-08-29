import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import HomePage from './Pages/HomePage/HomePage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import './App.css';
import Footer from './Components/Footer/Footer';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <NavigationBar />
        <Route path="/" exact strict component={HomePage}/>
        <Route path="/projects" exact strict component={ProjectsPage}/>
        <Route path="/about" exact strict component={AboutPage}/>
        <Footer />
      </BrowserRouter>
    );
  }

}

export default App;
