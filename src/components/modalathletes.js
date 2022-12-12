import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import "./modalcomponents.css"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ModalAthletes({ closeModal, data, type }) {

      const [isLoading, setLoading] = useState(true);
      const [typeModal, setTypeModal] = useState("");
      const [dataFetched, setDataFetched] = useState([]);

      function getData() {
        if (type === "SEE") {
          setTypeModal("SEE");
        } else if (type === "EDIT") {
          setTypeModal("EDIT");
        }

        let resp = fetch('http://192.168.160.58/Olympics/api/Athletes/FullDetails?id='+data, {
          method: 'GET'
        }).then((dados)=>{
          dados.json().then((properties) => {

            console.log(properties)
            var temp = [];
            temp.push(properties);

            setDataFetched(temp);
            setLoading(false);

          })
        }).catch((error) => {
          console.log("error")
        })
      }
    
      useEffect(() => {
        getData()
      }, [])
      if (isLoading) {
        console.log("wait")
        return (<p></p>)
      } else {
        if (typeModal === "EDIT") {
          return (
            <Modal
            show={true}
            onHide={() => closeModal()}
            centered
            size="lg"
          >
            <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formAthletes">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder={dataFetched[0]["Name"]} />
                <Form.Group className="mb-3">
                  <Form.Label as="legend" column sm={6}>
                    Sexo
                  </Form.Label>
                    <Form.Check
                      type="radio"
                      label="M"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                      checked={dataFetched[0]["Sex"] === "M"}
                    />
                    <Form.Check
                      type="radio"
                      label="F"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                      checked={dataFetched[0]["Sex"] === "F"}
                    />
                </Form.Group>
                <Form.Label>Altura</Form.Label>
                <Form.Control type="text" placeholder={dataFetched[0]["Height"]} />
                <Form.Label>Peso</Form.Label>
                <Form.Control type="text" placeholder={dataFetched[0]["Weight"]} />
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control type="date" placeholder={dataFetched[0]["BornDate"]} />
                <Form.Label>Local de Nascimento</Form.Label>
                <Form.Control type="text" placeholder={dataFetched[0]["BornPlace"]} />
                <Form.Label>Data da Morte</Form.Label>
                <Form.Control type="date" placeholder={dataFetched[0]["DiedDate"]} />
                <Form.Label>Local da Morte</Form.Label>
                <Form.Control type="text" placeholder={dataFetched[0]["DiedPlace"]} />
                <Form.Label>Link no olympedia.org</Form.Label>
                <Form.Control type="text" placeholder={dataFetched[0]["OlympediaLink"]} />
                <Form.Label>Foto</Form.Label>
                <Form.Control type="text" placeholder={dataFetched[0]["Photo"]} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={closeModal}>Close</Button>
            </Modal.Footer>
          </Modal>
          );
        }
        return (
          <Modal
            show={true}
            onHide={() => closeModal()}
            centered
            size="lg"
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                <h3>{dataFetched[0]["Name"]}</h3>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="d-flex justify-content-between align-items-center mt-4 px-4" align="center">
                <div class="stats">
                  <h6 class="mb-0">Nome</h6>
                  <span>{dataFetched[0]["Name"]}</span>
                </div>
                <div class="stats">
                  <h6 class="mb-0">Sexo</h6>
                  <span>{dataFetched[0]["Sex"]}</span>
                </div>
                <div class="stats">
                  <h6 class="mb-0">Altura</h6>
                  <span>{dataFetched[0]["Height"]}</span>
                </div>
                <div class="stats">
                  <h6 class="mb-0">Peso</h6>
                  <span>{dataFetched[0]["Weight"]}</span>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={closeModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
    }
  }

export default ModalAthletes;