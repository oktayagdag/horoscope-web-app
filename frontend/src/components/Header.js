import React,{useState} from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export default function App() {
  const [showNavCentred] = useState(false);
  return (
   <div >
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand style={{ marginLeft: '10%' }} show={showNavCentred} href='/'>
          <img
            src={require('../images/horoscope.png')} 
            height='30'
            alt='Logo'
            loading='lazy'
          />
          ~  Burçlar 
        </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
    </div>  
  );
}