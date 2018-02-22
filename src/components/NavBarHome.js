import React from 'react';
import { Menu } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

const style = {
    root: {
        boxShadow: '0 0 0.75em rgba(0,0,0,0.4)',
        height: '44px',
        backgroundColor: '#1c1c1c',
        textAlign: 'left'
    }
};

const NavBarHome = () => (
    <div>
        <Menu secondary inverted style={style.root}>
            <Menu.Item>MyFullFeaturesList</Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item href="/about">Want to know more?</Menu.Item>
                <Menu.Item href="/contact">Contact</Menu.Item>
                <Menu.Item href="/">Sing Up</Menu.Item>
                <Menu.Item href="/login">Login</Menu.Item>
            </Menu.Menu>
        </Menu>
    </div>
);

export default NavBarHome;
