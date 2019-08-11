import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import Menu from './Menu';
import { Provider } from 'react-redux';
import { store } from '../redux/store'


class NavbarTop extends React.Component {
render() {
 
    return (
        <>
        <Navbar bg="gray" >
        <Nav >
        <Provider store={store}>
        <Menu/>                              
            </Provider>
        </Nav>

        
        <Navbar.Collapse className="justify-content-center">
        <Navbar.Text >                   
      <h3>Bendigo Monitoring System  </h3>     
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