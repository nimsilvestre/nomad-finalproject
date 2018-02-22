import React from 'react';
import { Header, Button, Icon } from 'semantic-ui-react';

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
    <Header style={style.h1_1} className="h1_1 narrative-header ui center aligned">
        <Header className="narrative-headerContent">
            <div id="DIV_1">
                <h1 id="H1_2">
                    “Home is a notion that only nations of the homeless fully
                    appreciate and only the uprooted comprehend.”
                </h1>
            </div>
            <p style={style.p}>
                Here you can find Nomads around Belrin, and what they need to
                change to get off the streets.
            </p>
        </Header>
        <Button color="facebook">
            <Icon name="facebook" /> Facebook
        </Button>
        <Button color="twitter">
            <Icon name="twitter" /> Twitter
        </Button>
        <Button color="google plus">
            <Icon name="google plus" /> Google Plus
        </Button>
    </Header>
);

export default HeaderApp;
