import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NomadsList } from './nomadlist';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nomads: []
        };
    }
    componentDidMount() {
        //will call after calling render - one life cycle component
        axios.get('/nomads').then(({ data }) => {
            this.setState({
                nomads: data.results
            });
            //console.log('CLIENT SIDE GET NOMADS WORKING', data);
        });
    }

    render() {
        return (
            <BrowserRouter>
                <Route
                    exact
                    path="/"
                    render={() => <NomadsList nomads={this.state.nomads} />}
                />
            </BrowserRouter>
        );
    }
}
