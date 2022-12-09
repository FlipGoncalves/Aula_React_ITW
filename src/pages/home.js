import React, { useEffect, useState } from 'react';
import CarrocaL from '../components/carrossel';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AthleteCard from '../components/athletecard';
import logo from '../images/oglogow.png';
import og2024 from '../images/og2024.webp';
import p2024 from '../images/paris2024.png';
import './home.css'
import Button from 'react-bootstrap/Button';

function Home(){

	const [card1, setCard1] = useState("false");
	const [card2, setCard2] = useState("false");
	const [time, setTime] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(prevTime => prevTime + 1)
		}, 500);
	  }, []);

	useEffect(() => {
		if (card1 === "false") {
			if (time > 0)
				setCard1("true")
			} else {
			setCard2("true")
		}
	}, [time]);

    return(
        <Container fluid>
			<Row >
				<CarrocaL />
			</Row>
			<Row style={{marginTop: "150px"}}>
				<h1 align="center">Atletas Realçados</h1>
				<Container style={{marginTop: "30px"}}>
					<Row className="justify-content-md-center">
						<Col xs lg="2">
							<AthleteCard id="94406"/>
						</Col>
						{card1 === "true" && <Col xs lg="2">
							<AthleteCard id="87390"/>
						</Col>}
						{card2 === "true" && <Col xs lg="2">
							<AthleteCard id="13386"/>
						</Col>}
					</Row>
				</Container>
				<div align="center" style={{marginTop: "20px"}}>
					<Button align="center" variant="outline-secondary" style={{width: "150px"}} href="/athletes">See More <i class="fa-solid fa-arrow-right"></i></Button>
				</div>
			</Row>
			<Row className="justify-content-md-center align-items-center" style={{marginTop: "150px"}}>
				<Col xs lg="3">
					<img src={logo} style={{width: "400px"}} />
				</Col>
				<Col xs lg="3">
					<h1 style={{fontSize: 100}}>Próximos Jogos</h1>
				</Col>
			</Row>
			<Row className="justify-content-md-center align-items-center" style={{verticalAlign: "middle", paddingBottom: "150px"}}>
				<Col xs lg="12" align="center">
					<div style={{backgroundColor: "black"}} className="cont">
						<img src={og2024} className="image"/>
						<div class="overlay">
							<img src={p2024} style={{height: "250px"}}/>
						</div>
					</div>
				</Col>
			</Row>
        </Container>
    )
}

export default Home;
