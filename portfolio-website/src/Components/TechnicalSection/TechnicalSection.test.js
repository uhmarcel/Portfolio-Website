import React from 'react';
import ReactDOM from 'react-dom';
import TechnicalSection from './TechnicalSection';

// Functional rest
it('TechnicalSection renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TechnicalSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
