import React from 'react';
import { Menu } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

const NavBar = () => (
    <div>
        <Menu>
            <Menu.Menu>
                <Menu.Item>MyFullFeaturesList</Menu.Item>
            </Menu.Menu>
            <Menu.Menu position="right">
                <Menu.Item onClick={() => browserHistory.push('/about')}>
                    About us
                </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position="right">
                <Menu.Item onClick={() => browserHistory.push('/contact')}>
                    Contact
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    </div>
);

export default NavBar;
