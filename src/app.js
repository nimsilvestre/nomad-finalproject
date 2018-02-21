import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NomadsList from './nomadlist';
import { Container } from 'semantic-ui-react';
import About from './components/About';
import Contact from './components/Contact';

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
                nomads: data.results //to get the results array
            });
            //console.log('CLIENT SIDE GET NOMADS WORKING', data);
        });
    }

    render() {
        return (
            <BrowserRouter>
                <Container text>
                    <Route
                        exact
                        path="/"
                        render={() => <NomadsList nomads={this.state.nomads} />}
                    />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Container>
            </BrowserRouter>
        );
    }
}
