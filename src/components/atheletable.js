import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';

function Athletetable() {

    const [data, setData] = useState([]);

    const getData = () => {
        var temp = [];
        [[1, "Mark", "Otto", "@mdo"], [1, "Mark", "Otto", "@mdo"], [1, "Mark", "Otto", "@mdo"]].forEach((element) => {
            temp.push(<tr>
                <td>{element[0]}</td>
                <td>{element[1]}</td>
                <td>{element[2]}</td>
                <td>{element[3]}</td>
            </tr>)
        });
        setData(temp);
        console.log(data);
    }


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {data}
      </tbody>
      <button onClick={getData}>Click me</button>
    </Table>
  );
}

export default Athletetable;