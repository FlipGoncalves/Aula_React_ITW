import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import image from '../images/oglogo.png';

function AthleteCard(props) {

    const [data, setData] = useState([]);

    function getData() {

        let resp = fetch('http://192.168.160.58/Olympics/api/Athletes/'+props["id"], {
          method: 'GET'
        }).then((dados)=>{
          dados.json().then((properties) => {
        
            console.log(properties);

            var temp = {};

            temp["Name"] = properties["Name"]
            temp["Image"] = properties["Photo"]
            temp["BornPlace"] = properties["BornPlace"]
            temp["BornDate"] = properties["BornDate"]
            temp["Weight"] = properties["Weight"]
            temp["Height"] = properties["Height"]
            temp["Sex"] = properties["Sex"]

            setData(temp);

          })
        }).catch((error) => {
          console.log("error")
        })

        console.log(data);
    }

  useEffect(() => {
    getData()
    console.log("here" + props["id"])
  }, [])

  return (
    <Card style={{ width: '18rem' }}>
      <div style={{width: "18rem"}}>
        <Card.Img variant="top" src={data["Image"]} className="card-img" style={{height:"20rem", objectFit: "cover"}}/>
      </div>
      <Card.Body>
        <Card.Title align="center">{data["Name"]}</Card.Title>
        <Card.Text>
          <p>Date of birth: {data["BornDate"]}</p>
          <p>Born in: {data["BornPlace"]}</p>
          <p>Height: {data["Height"]}</p>
          <p>Weight: {data["Weight"]}</p>
          <p>Sex: {data["Sex"]} </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AthleteCard;