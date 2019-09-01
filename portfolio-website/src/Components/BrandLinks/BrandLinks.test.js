import React from 'react';
import ReactDOM from 'react-dom';
import BrandLinks from './BrandLinks';

// Functional rest
it('BrandLinks renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrandLinks />, div);
  ReactDOM.unmountComponentAtNode(div);
});
