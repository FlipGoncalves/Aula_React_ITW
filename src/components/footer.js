import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
import logo from '../images/oglogow.png';
import './footer.css';

function FooterITW() {
  return (
    <CDBFooter className="shadow" style={{backgroundColor: "#212529", color: "white"}}>
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '80%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox className="h5 mb-4">
            <img src={logo} style={{width: "200px"}}></img>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Filipe Gonçalves
            </p>
            <CDBBox display="flex">
                <a href="https://www.linkedin.com/in/filipe-gon%C3%A7alves-150789239/" target="_blank" rel="noreferrer">
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="linkedin" />
                    </CDBBtn>
                </a>
                <a href="https://github.com/FlipGoncalves" target="_blank" rel="noreferrer">
                    <CDBBtn flat color="dark" className="mx-3 p-2" >
                        <CDBIcon fab icon="github"/>
                    </CDBBtn>
                </a>
                <a href="https://www.instagram.com/filipe_asg/" target="_blank" rel="noreferrer">
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                </a>
            </CDBBox>
            <p className="h8 mb-4" style={{ marginTop: '15px' }}>
              filipeg@ua.pt
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Pedro Lopes
            </p>
            <CDBBox display="flex">
                <a href="https://www.linkedin.com/in/pedro-lopes-127615207/" target="_blank" rel="noreferrer">
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="linkedin" />
                    </CDBBtn>
                </a>
                <a href="https://github.com/Pedro-Lopes-Frisson" target="_blank" rel="noreferrer">
                    <CDBBtn flat color="dark" className="mx-3 p-2" >
                        <CDBIcon fab icon="github"/>
                    </CDBBtn>
                </a>
                <a href="https://www.instagram.com/pedrolopes136/" target="_blank" rel="noreferrer">
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                </a>
            </CDBBox>
            <p className="h8 mb-4" style={{ marginTop: '15px' }}>
              pdfl@ua.pt
            </p>
          </CDBBox>
        </CDBBox>
        <CDBBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ width: '100%' }}
          className="mx-auto mt-4"
        >
            <small className="text-center" style={{ width: '50%' }}> &copy; Aula de React, 2022. All rights reserved.</small>
            <a href="https://github.com/FlipGoncalves/Aula_React_ITW" target="_blank" rel="noreferrer">
                <CDBBtn flat color="dark" className="mx-3 p-2" >
                    <CDBIcon fab icon="github"/>
                </CDBBtn>
            </a>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
}

export default FooterITW;