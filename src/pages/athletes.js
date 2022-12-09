import React from 'react';
import Athletetable from '../components/atheletable';
import { MDBInput, MDBCol, MDBContainer } from "mdbreact";

function Athletes(){
    return(
        <div>
            <MDBContainer>
                <MDBCol md="12">
                    <MDBInput hint="Search" type="text" containerClass="mt-0" />
                </MDBCol>
            </MDBContainer>
            <Athletetable />
        </div>
    )
}

export default Athletes;