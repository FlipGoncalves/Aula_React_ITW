import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import image from '../images/oglogo.png';

function AthleteCard(props) {

    const [data, setData] = useState([]);

    function getData() {

        console.log(props);

        // let resp = fetch('http://192.168.160.58/Olympics/api/Games', {
        //   method: 'GET'
        // }).then((dados)=>{
        //   dados.json().then((properties) => {
        
        //     var temp = [];
        //     properties["Records"].forEach((element) => {
        //       temp.push(<tr>
        //           <td>{element["Name"]}</td>
        //           <td>{element["CityName"]}</td>
        //           <td>{element["CountryName"]}</td>
        //           <td>{element["Year"]}</td>
        //       </tr>)
        //     });

        //     setData(temp);

        //   })
        // }).catch((error) => {
        //   console.log("error")
        // })
    }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Card style={{ width: '18rem' }}>
      <div style={{width: "18rem"}}>
        <Card.Img variant="top" src={image} className="card-img"/>
      </div>
      <Card.Body>
        <Card.Title align="center">Athlete Name</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AthleteCard;