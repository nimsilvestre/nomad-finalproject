import React from 'react';

export class DashboardPage extends React.Component {
    render() {
        console.log('DASHBOARD:', this.props);
        return (
            <div>
                <h1>Nomads</h1>
                <a className="logout-btn" href="/logout">
                    Logout
                </a>
            </div>
        );
    }
}
