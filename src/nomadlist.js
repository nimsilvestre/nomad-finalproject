import React from 'react';
import { Card, Image } from 'semantic-ui-react';

export class NomadsList extends React.Component {
    render() {
        console.log('NOMAD LIST:', this.props);
        return (
            <div className="ui three stackable cards">
                {this.props.nomads.map(nomad => (
                    <Card key={nomad.id}>
                        <Image src="{nomad.image}" />
                        <Card.Content>
                            <Card.Header>{nomad.first}</Card.Header>
                            <Card.Meta>{nomad.created_at}</Card.Meta>
                            <Card.Description>
                                <p>
                                    {nomad.gender},{nomad.age}
                                </p>
                                <p>{nomad.location}</p>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                ))}
            </div>
        );
    }
}
