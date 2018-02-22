import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { RegisterForm } from './RegisterForm'; //curly because it is not the default component
import { Login } from './login';
import NavBarHome from './components/NavBarHome';
import Contact from './components/Contact';
import About from './components/About';
import { Container, Header, Grid } from 'semantic-ui-react';

const style = {
    root: {
        paddingTop: '15%',
        height: '385px',
        color: 'white',
        borderBotton: '1px dashed #dfdfe2'
    }
};

export function Welcome() {
    return (
        <div>
            <NavBarHome />
            <HashRouter>
                <Container text style={style.root}>
                    <Grid centered>
                        <Header>
                            <h1>WELCOME TO URBAN NOMAD!</h1>
                        </Header>
                    </Grid>
                    <Route exact path="/" component={RegisterForm} />
                    <Route path="/login" component={Login} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Container>
            </HashRouter>
        </div>
    );
}
