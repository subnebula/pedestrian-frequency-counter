import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import Menu from './Menu';


class NavbarTop extends React.Component {
render() {
 
    return (
        <>
        <Navbar bg="gray" >
        <Nav >
        <Menu/>                              
        </Nav>

        
        <Navbar.Collapse className="justify-content-center">
        <Navbar.Text >                   
      <h2>Bendigo Monitoring System  </h2>     
      </Navbar.Text>
      </Navbar.Collapse>
      <Navbar sticky="bottom" />
      < Navbar  sticky = "top"  />

       </Navbar>
       

       </>
    )
}

}
export default NavbarTop;