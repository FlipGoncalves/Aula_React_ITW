import React from 'react';
import Gamestable from '../components/gamestable';
import { MDBInput, MDBCol, MDBContainer } from "mdbreact";

function Games(){
    return(
        <div>
            <MDBContainer>
                <MDBCol md="12">
                    <MDBInput hint="Search" type="text" containerClass="mt-0" />
                </MDBCol>
            </MDBContainer>
            <Gamestable />
        </div>
    )
}

export default Games;
