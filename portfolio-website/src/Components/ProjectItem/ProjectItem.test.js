import React from 'react';
import ReactDOM from 'react-dom';
import ProjectItem from './ProjectItem';

// Functional rest
it('ProjectItem renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
