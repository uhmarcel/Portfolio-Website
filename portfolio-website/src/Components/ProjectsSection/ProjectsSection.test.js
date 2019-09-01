import React from 'react';
import ReactDOM from 'react-dom';
import ProjectsSection from './ProjectsSection';

// Functional rest
it('ProjectsSection renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectsSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});

