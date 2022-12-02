import React from 'react';
import CarrocaL from '../components/CarroçaL';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home(){
    return(
        <Container fluid>
	    <Row >
	    	<CarrocaL />
	    </Row>
	    <Row>
		<h1>Home Page, Olypics bejiling!</h1>
	    </Row>
        </Container>
    )
}

export default Home;
