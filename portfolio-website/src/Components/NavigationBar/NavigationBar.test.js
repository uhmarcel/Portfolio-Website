import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from "./NavigationBar";


// Unit test
it('Navigation bar renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavigationBar />, div);
    ReactDOM.unmountComponentAtNode(div);
});

