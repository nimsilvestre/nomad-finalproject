import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const style = {
    div1: {
        margin: '10%'
    }
};
export class NomadsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log('NOMAD LIST:', this.props);
        return (
            <div>
                <div style={style.div1} className="ui three stackable cards">
                    {this.props.nomads.map(nomad => (
                        <Card
                            onClick={() => this.props.onClick(nomad.id)}
                            key={nomad.id}>
                            <Image src={nomad.image} />
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
                            <Card.Content>
                                <Icon name="favorite" />
                            </Card.Content>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }
}
