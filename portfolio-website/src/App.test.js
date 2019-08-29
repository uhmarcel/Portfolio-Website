import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Functional rest
it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('FakeTest', () => {
  expect(1).toBe(1);
})
