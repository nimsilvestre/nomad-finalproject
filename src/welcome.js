import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Registration } from './register'; //curly because it is not the default component
import { Login } from './login';

export function Welcome() {
    return (
        <div>
            <HashRouter>
                <div>
                    <Route exact path="/" component={Registration} />
                    <Route path="/login" component={Login} />
                </div>
            </HashRouter>
        </div>
    );
}
