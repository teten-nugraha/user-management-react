import React, {useState} from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';


const Header = () => {

    const [showNav, setShowNav] = useState(true);

    return (
        <MDBNavbar expand='lg' light bgColor='primary'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='#' className='text-white'>Navbar</MDBNavbarBrand>
            <MDBNavbarToggler
              type='button'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowNav(!showNav)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBCollapse navbar show={showNav} className='text-white'>
              <MDBNavbarNav>
                <MDBNavbarItem>
                  <MDBNavbarLink aria-current='page' href='/' className='text-white'>
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/addUser' className='text-white'>
                    Add User
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/about' className='text-white'>
                    About
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      );
}

export default Header;
