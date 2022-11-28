import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import "./modalcomponents.css"

function ModalComponent({ closeModal, data, type }) {

      const [isLoading, setLoading] = useState(true);
      const [typeModal, setTypeModal] = useState("");
      const [dataFetched, setDataFetched] = useState([]);

      function getData() {
        if (type === "SEE") {
          setTypeModal("SEE");

          let resp = fetch('http://192.168.160.58/Olympics/api/Games/FullDetails?id='+data, {
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

        else if (type === "EDIT") {
          setTypeModal("EDIT");
          console.log("someh")
        }

      }
      
      useEffect(() => {
        getData()
      }, [])

      if (isLoading) {
        return <div className="App">Loading...</div>;
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
                <h6 class="mb-0">Ano</h6>
                <span>{dataFetched[0]["Year"]}</span>
              </div>
              <div class="stats">
                <h6 class="mb-0">Cidade</h6>
                <span>{dataFetched[0]["City"]}</span>
              </div>
              <div class="stats">
                <h6 class="mb-0">País</h6>
                <span>{dataFetched[0]["CountryName"]}</span>
              </div>
              <div class="stats">
                <h6 class="mb-0">Ano</h6>
                <span>{dataFetched[0]["Season"]}</span>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
  }

export default ModalComponent;