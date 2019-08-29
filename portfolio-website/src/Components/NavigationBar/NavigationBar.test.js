import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from "./NavigationBar";
import { BrowserRouter } from 'react-router-dom';


// Unit test
it('navigation bar renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <NavigationBar />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});

