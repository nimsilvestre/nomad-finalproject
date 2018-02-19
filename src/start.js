import React from 'react';
import ReactDOM from 'react-dom';

import { Welcome } from './welcome';
import App from './app';

//THIS CODE CHECK THE URL IN THE COOKIES TO SEE IF THE USER IS LOGGED IN
var component;
// ReduxPromise is the middleware!!!
// createStore is refering to our storage!

if (location.pathname == '/welcome') {
    component = <Welcome />;
} else {
    component = <App />;
}

ReactDOM.render(
    component,
    document.querySelector('main') //passing TO THI html element
);
