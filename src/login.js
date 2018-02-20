import React from 'react';
import axios from 'axios'; //axios with csurf- change in every component that requires ajax requests
import { Link } from 'react-router-dom';
import { Button, Form, Grid } from 'semantic-ui-react';

const style = {
    root: {
        marginTop: '5%'
    }
};

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: false
        };
    }

    setFieldValue(e) {
        this[e.target.name] = e.target.value;
    }

    submit() {
        axios
            .post('/login', {
                email: this.email,
                password: this.password
            })
            .then(({ data }) => {
                if (data.success) {
                    location.replace('/'); //This is necessary to unable to backspace in the browser
                } else {
                    this.setState({
                        error: true
                    });
                }
            });
    }

    render() {
        return (
            <Grid centered style={style.root}>
                <Grid.Column className="ui center aligned" width={6}>
                    <Form>
                        <Form.Field>
                            <label>Email</label>
                            <input
                                placeholder="Email"
                                name="email"
                                onChange={e => this.setFieldValue(e)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input
                                placeholder="Password"
                                name="password"
                                type="password"
                                onChange={e => this.setFieldValue(e)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Button onClick={() => this.submit()}>Login</Button>
                            <Link to="/">
                                <Button>Sing Up</Button>
                            </Link>
                        </Form.Field>
                        {this.state.error && (
                            <div>Invalid Authentification! Try again.</div>
                        )}
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}
