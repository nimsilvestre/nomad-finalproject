import React from 'react';
import { browserHistory } from 'react-router';
import { Container, Header } from 'semantic-ui-react';

const locations = [
    {
        id: 1,
        name: 'Caritas',
        neighborhood: 'Reinickendorf',
        items: 'Clothing & Babywear',
        contact: '030-6 6 63 30',
        address: 'Residenzstraße 90',
        url: 'https://www.caritas-berlin.de'
    },
    {
        id: 2,
        name: '"Heart & Hand"',
        neighborhood: 'Spandau',
        items: 'Food & Baked goods',
        contact: '0160-94 81 97 40',
        address: 'Tiefwerder Weg 5-7',
        url: 'https://www.adventgemeinde-spandau.de'
    },
    {
        id: 3,
        name: 'The station mission Zoologischer Garten',
        neighborhood: 'Charlottenburg-Wilmersdorf',
        items: 'Food & Clothing',
        contact: '030-313 80 88',
        address: 'Jebenstraße 5',
        url: null
    },
    {
        id: 4,
        name: 'Berlin homeless help e. V.',
        neighborhood: 'Mitte',
        items: 'Food & Clothing',
        contact: '030-51 30 48 96',
        address: 'Buttmannstraße 1A',
        url: 'https://www.berliner-obdachlosenhilfe.de'
    },
    {
        id: 5,
        name: 'The Berlin City Mission',
        neighborhood: 'Mitte',
        items: 'Food, Clothing, Sleeping bags & Hygine',
        contact: '030-690 33-510',
        address: 'Lehrter Straße 68',
        url: 'https://www.berliner-stadtmission.de'
    },
    {
        id: 6,
        name: 'Jenny de la Torre Foundations Homeless Health Center',
        neighborhood: 'Mitte',
        items: 'Food, Clothing, Shoes, Hygine',
        contact: '030-44 03 97 00',
        address: 'Lehrter Straße 68',
        url: 'https://www.delatorre-stiftung.de'
    },
    {
        id: 7,
        name: 'The association homeless help The bridge e. V.',
        neighborhood: 'Mitte',
        items: 'Food, Clothing, Shoes, Hygine',
        contact: '030-28 88 45 980',
        address: 'Elisabethkirchstraße 17',
        url: 'https://www.obdachlosenhilfe-die-bruecke.de'
    },
    {
        id: 8,
        name: 'The Berliner Tafel e. V.',
        neighborhood: 'Mitte',
        items: 'Hygine',
        contact: '030-28 88 45 980',
        address: 'Beusselstraße 44 N-Q',
        url: 'https://www.berliner-tafel.de '
    },
    {
        id: 9,
        name: 'Protestant Pauluskirche',
        neighborhood: 'Steglitz-Zehlendorf',
        items: 'Food',
        contact: '030-77 10 9 72',
        address: 'Kirchstraße 6',
        url: 'https://www.dwstz.de'
    },
    {
        id: 10,
        name: 'Christian Hilfe',
        neighborhood: 'Tempelhof-Schöneberg',
        items: 'Food',
        contact: '030-77 10 9 72',
        address: 'Rubensstraße 87',
        url: 'https://www.christlichehilfe.de'
    },
    {
        id: 11,
        name: 'The soup kitchen of the Franciscan monastery Pankow',
        neighborhood: 'Pankow',
        items: 'Food',
        contact: '030-77 10 9 72',
        address: 'Wollankstraße 19',
        url: 'https://www.pankow.franziskaner.de'
    },
    {
        id: 12,
        name: 'The shelter e. V.',
        neighborhood: 'Friedrichshain-Kreuzberg',
        items: 'Clothing',
        contact: '030-77 10 9 72',
        address: 'Samariterstraße 27',
        url: 'https://www.obdach-ev.de'
    },
    {
        id: 13,
        name: 'The association Jahresringe e. V.',
        neighborhood: 'Marzahn-Hellersdorf',
        items: 'Clothing',
        contact: '030-77 10 9 72',
        address: 'Bitterfelder road 15 ',
        url: 'https://www.jahresringe-ev.de'
    }
];
function searchingFor(term) {
    return function(x) {
        return (
            x.neighborhood.toLowerCase().includes(term.toLowerCase()) || !term
        );
    };
}
export class LocationMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: locations,
            term: ''
        };
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event) {
        this.setState({ term: event.target.value });
    }

    render() {
        const { term, people } = this.state;
        return (
            <div>
                <form>
                    <input
                        type="text"
                        onChange={this.searchHandler}
                        value={term}
                    />
                </form>
                <Container text>
                    {locations.filter(searchingFor(term)).map(location => (
                        <div key={location.id}>
                            <Header>{location.name}</Header>
                            <h3>{location.neighborhood}</h3>
                            <h4>{location.items}</h4>
                            <p>{location.address}</p>
                        </div>
                    ))}
                </Container>
            </div>
        );
    }
}
