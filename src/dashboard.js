import React from 'react';

export class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Dashboard Page</h1>
                <a className="logout-btn" href="/logout">
                    Logout
                </a>
            </div>
        );
    }
}
