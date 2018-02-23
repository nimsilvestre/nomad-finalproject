import React from 'react';
import axios from 'axios';
import { HashRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Input } from 'semantic-ui-react';

const style = {
    root: {
        marginTop: '5%'
    }
};

export class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            last: '',
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
            .post('/register', {
                first: this.first,
                last: this.last,
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
                            <label>First Name</label>
                            <Input
                                placeholder="First Name"
                                name="first"
                                onChange={e => this.setFieldValue(e)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <Input
                                placeholder="Last Name"
                                name="last"
                                onChange={e => this.setFieldValue(e)}
                            />
                        </Form.Field>
                        <Form.Field required>
                            <label>Email</label>
                            <Input
                                placeholder="Email"
                                name="email"
                                onChange={e => this.setFieldValue(e)}
                            />
                        </Form.Field>
                        <Form.Field required>
                            <label>Password</label>
                            <Input
                                placeholder="Password"
                                name="password"
                                type="password"
                                onChange={e => this.setFieldValue(e)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Button onClick={() => this.submit()}>
                                Submit
                            </Button>
                            <Link to="/login">
                                <Button>Login</Button>
                            </Link>
                        </Form.Field>
                        {this.state.error && (
                            <div>Fail to register! Please, try again.</div>
                        )}
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}
