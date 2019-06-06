import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import Menu from './Menu';


class NavbarTop extends React.Component {
render() {
 
    return (
        <>
        <Navbar bg="purple" >
        <Nav >
                <Nav.Item>
                    <Menu/>   
                </Nav.Item>                           
            </Nav>
            <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text >             
                <h2>Bendigo Monitoring System  </h2>     
            </Navbar.Text>
            </Navbar.Collapse>
            
        </Navbar>
       </>
    )
}

}
export default NavbarTop;