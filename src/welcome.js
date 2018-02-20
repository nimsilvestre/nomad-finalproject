import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Registration } from './register'; //curly because it is not the default component
import { Login } from './login';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';

export function Welcome() {
    return (
        <div>
            <NavBar />
            <HashRouter>
                <div>
                    <Route exact path="/" component={Registration} />
                    <Route path="/login" component={Login} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
            </HashRouter>
        </div>
    );
}
