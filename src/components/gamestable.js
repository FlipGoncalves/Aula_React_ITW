import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
import ModalGames from './modalgames';

function Gamestable() {

    const [data, setData] = useState([]);
    const [modal, setModal] = useState({ show: false, id: null, type: "" });

    const handleClose = () => {
        setModal({ show: false, id: null, type: "" });
    };

    function getData() {

        let resp = fetch('http://192.168.160.58/Olympics/api/Games', {
          method: 'GET'
        }).then((dados)=>{
          dados.json().then((properties) => {

            console.log(properties)
            var temp = [];
            properties["Records"].forEach((element) => {
              temp.push(<tr>
                            <td>{element["Name"]}</td>
                            <td>{element["CityName"]}</td>
                            <td>{element["CountryName"]}</td>
                            <td>{element["Year"]}</td>
                            <td align="center">
                                <Button variant="dark" size="sm" active onClick={() => setModal({ show: true, id: element["Id"], type: "EDIT" })}>
                                    <i class="fas fa-edit"></i>
                                </Button>{' '}
                                <Button variant="success" size="sm" active onClick={() => setModal({ show: true, id: element["Id"], type: "SEE" })}>
                                    <i class="fas fa-eye"></i>
                                </Button>
                            </td>
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
    <Container>
        <Table striped bordered hover style={{width: '100%', margin:'5px'}}>
            <thead style={{backgroundColor: 'grey', color: "white"}}>
                <tr>
                <th>Nome dos Jogos</th>
                <th>Cidade</th>
                <th>País</th>
                <th>Ano</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {data}
            </tbody>
        </Table>
        {modal.show && modal.id && <ModalGames closeModal={handleClose} data={modal.id} type={modal.type} />}
    </Container>
  );
}

export default Gamestable;
