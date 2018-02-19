import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { DashboardPage } from './dashboard';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" render={() => <DashboardPage />} />
            </BrowserRouter>
        );
    }
}
