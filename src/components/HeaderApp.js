import React from 'react';
import { Header, Button, Icon, Image, Grid } from 'semantic-ui-react';

const style = {
    p: {
        margin: '30px 120px',
        fontSize: '20px',
        paddingBottom: '90px'
    },
    h1_1: {
        borderBottom: '1px dashed #dfdfe2'
    }
};

const HeaderApp = () => (
    <Header className="h1_1 narrative-header ui center aligned">
        <Header className="narrative-headerContent">
            <div id="DIV_1">
                <h1 id="H1_2">
                    “Home is a notion that only nations of the homeless fully
                    appreciate and only the uprooted comprehend.”
                </h1>
                <h4>
                    Here you can find Nomads around Berlin, and their stories.
                    Here you can take the time to know them without being afraid
                    of them.
                </h4>
            </div>
            <p style={style.p}>
                Take your time and if you feel that you want to take a step
                forward and want to support them, you can contact their location
                help center.
            </p>
        </Header>
        <div style={style.h1_1}>
            <Button color="facebook">
                <Icon name="facebook" /> Facebook
            </Button>
            <Button color="twitter">
                <Icon name="twitter" /> Twitter
            </Button>
            <Button color="google plus">
                <Icon name="google plus" /> Google Plus
            </Button>
        </div>
    </Header>
);

export default HeaderApp;
