
import React from 'react';
import { render } from 'react-dom'; // Just need render method.
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
import App from './components/App.js';
import VendorPicker from './components/VendorPicker';
import NotFound from './components/NotFound';

//React router 4 - there are 2 main ways to change the page

const Root = () => {
    return (
        // this router is the base router. we can access it anywhere through out our application by using context
        // not good practice to use 'global' items unless it makes sense as in using a router.  React makes it difficult which is good..
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={VendorPicker} />
                <Match pattern="/vendor/:vendorId" component={App} />
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}

 render(<Root/>, document.querySelector('#main'));