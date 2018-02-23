import React from 'react';
import { browserHistory } from 'react-router';
import { Container, Image , Grid} from 'semantic-ui-react';

const style = {
    div1: {
        margin: '5%'
    },
    div2: {
        margin: '3%'
    }
};

const About = () => (
    <div style={style.div1}>
        <Grid centered>
            <Image style={style.div2} src="./public/logo.svg" size="medium" />
        </Grid>

        <Container text>
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas maecenas pharetra convallis posuere morbi leo urna
                molestie at. Elit at imperdiet dui accumsan sit amet nulla.
                Magna eget est lorem ipsum dolor sit amet consectetur. Et
                egestas quis ipsum suspendisse ultrices gravida dictum fusce ut.
                Dictum non consectetur a erat nam at lectus. Vitae tortor
                condimentum lacinia quis vel eros. Nullam vehicula ipsum a arcu
                cursus. Ut diam quam nulla porttitor massa id neque. Risus in
                hendrerit gravida rutrum quisque non tellus orci ac. Amet
                venenatis urna cursus eget. Sem integer vitae justo eget magna
                fermentum iaculis. Sapien nec sagittis aliquam malesuada. Vitae
                proin sagittis nisl rhoncus mattis rhoncus. Netus et malesuada
                fames ac turpis. Nunc aliquet bibendum enim facilisis gravida
                neque. Nisl vel pretium lectus quam id leo in. Eget velit
                aliquet sagittis id consectetur purus ut. Dictum fusce ut
                placerat orci nulla pellentesque dignissim enim. Sed adipiscing
                diam donec adipiscing tristique risus nec feugiat. At tempor
                commodo ullamcorper a lacus vestibulum sed arcu. Suscipit
                adipiscing bibendum est ultricies. Elementum facilisis leo vel
                fringilla est ullamcorper eget nulla. Eu turpis egestas pretium
                aenean pharetra magna ac placerat. At erat pellentesque
                adipiscing commodo elit. Velit dignissim sodales ut eu. Sit amet
                dictum sit amet justo donec enim. Laoreet non curabitur gravida
                arcu ac tortor dignissim convallis. Sed lectus vestibulum mattis
                ullamcorper. Ac turpis egestas maecenas pharetra. Aenean sed
                adipiscing diam donec adipiscing.
            </p>
        </Container>
    </div>
);

export default About;
