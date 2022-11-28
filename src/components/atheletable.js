import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';

function Athletetable() {

    const [data, setData] = useState([]);

    function getData() {

        let resp = fetch('http://192.168.160.58/Olympics/api/Games', {
          method: 'GET'
        }).then((dados)=>{
          dados.json().then((properties) => {
        
            var temp = [];
            properties["Records"].forEach((element) => {
              temp.push(<tr>
                  <td>{element["Name"]}</td>
                  <td>{element["CityName"]}</td>
                  <td>{element["CountryName"]}</td>
                  <td>{element["Year"]}</td>
              </tr>)
            });

            setData(temp);

          })
        }).catch((error) => {
          console.log("error")
        })
    }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nome dos Jogos</th>
          <th>Cidade</th>
          <th>País</th>
          <th>Ano</th>
        </tr>
      </thead>
      <tbody>
        {data}
      </tbody>
    </Table>
  );
}

export default Athletetable;