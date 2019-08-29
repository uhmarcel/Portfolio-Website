import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import HomePage from './Pages/HomePage/HomePage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <NavigationBar/>
        <Route path="/" exact strict component={HomePage}/>
        <Route path="/projects" exact strict component={ProjectsPage}/>
        <Route path="/about" exact strict component={AboutPage}/>
      </BrowserRouter>
    );
  }

}

export default App;
