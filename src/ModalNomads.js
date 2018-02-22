import React from 'react';
import _ from 'lodash';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react';

export class ModalNomads extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Modal trigger={<Button>Show Modal</Button>}>
                    <Modal.Header>{this.props.nomad.first} {this.props.nomad.last}</Modal.Header>
                    <Modal.Content image>
                        <Image
                            wrapped
                            size="big"
                            src={this.props.nomad.image}
                        />
                        <Modal.Description>
                            <Header>{this.props.nomad.location}</Header>
                            <p>{this.props.nomad.bio}</p>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}
