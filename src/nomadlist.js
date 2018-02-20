import React from 'react';

export class NomadsList extends React.Component {
    render() {
        console.log('DASHBOARD:', this.props);
        return (
            <div>
                <a className="logout-btn" href="/logout">
                    Logout
                </a>
                <h1>Nomads</h1>
                <ul>
                    {this.props.nomads.map(nomad => (
                        <li key={nomad.id}>{nomad.first}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
