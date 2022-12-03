import React from 'react';
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
    return(
        <Container fluid>
			<Row >
				<CarrocaL />
			</Row>
			<Row style={{marginTop: "150px"}}>
				<h1 align="center">Featured Athletes</h1>
				<Container style={{marginTop: "30px"}}>
					<Row className="justify-content-md-center">
						<Col xs lg="2">
							<AthleteCard id="1"/>
						</Col>
						<Col xs lg="2">
							<AthleteCard />
						</Col>
						<Col xs lg="2">
							<AthleteCard />
						</Col>
						<Col xs lg="2">
							<AthleteCard />
						</Col>
					</Row>
					<Row className="justify-content-md-center" style={{marginTop: "20px"}}>
						<Col xs lg="2">
							<AthleteCard />
						</Col>
						<Col xs lg="2">
							<AthleteCard />
						</Col>
						<Col xs lg="2">
							<AthleteCard />
						</Col>
						<Col xs lg="2">
							<AthleteCard />
						</Col>
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
					<h1 style={{fontSize: 100}}>Next Games</h1>
				</Col>
			</Row>
			<Row className="justify-content-md-center align-items-center" style={{verticalAlign: "middle", marginBottom: "150px"}}>
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
