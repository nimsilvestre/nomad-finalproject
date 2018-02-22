import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NomadsList } from './nomadlist';
import { ModalNomads } from './ModalNomads';
import { Container, Grid } from 'semantic-ui-react';
import About from './components/About';
import Contact from './components/Contact';
import {LocationMap} from './components/LocationMap';
import NavBar from './components/NavBar';
import HeaderApp from './components/HeaderApp';

const style = {
    root: {
        height: '385px',
        marginTop: '50px'
    }
};

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nomads: [],
            isHidden: true
        };
    }

    toggleHidden(id) {
        console.log(id);
        this.setState({
            isHidden: !this.state.isHidden,
            currentNomad: this.state.nomads.find(nomad => {
                return nomad.id == id
            })
        });
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
                <div>
                    <NavBar />
                    <Container text>
                        <div style={style.div}>
                            <Grid centered style={style.root}>
                                <HeaderApp />
                            </Grid>
                        </div>

                        {!this.state.isHidden && (
                            <ModalNomads nomad={this.state.currentNomad} />
                        )}
                    </Container>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <NomadsList
                                onClick={this.toggleHidden.bind(this)}
                                nomads={this.state.nomads}
                            />
                        )}
                    />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/location" component={LocationMap} />
                </div>
            </BrowserRouter>
        );
    }
}
