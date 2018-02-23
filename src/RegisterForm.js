import React from 'react';
import { Registration } from './register'; //curly because it is not the default component
import { Button, Grid } from 'semantic-ui-react';

const style = {
    root: {
        marginTop: '5%'
    }
};

export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true
        };
    }
    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        });
    }

    render() {
        return (
            <div>
                <Grid centered style={style.root}>
                    <Button color='teal' onClick={this.toggleHidden.bind(this)}>
                        START HELPING HERE!
                    </Button>
                </Grid>
                {!this.state.isHidden && <Registration />}
            </div>
        );
    }
}
