import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import Menu from './Menu';
import { connect } from 'react-redux'


class NavbarTop extends React.Component {
    render() {
    
        return (
            <>
            <Navbar bg="gray" >
            <Nav >
                    <Nav.Item>
                        <Menu
                            markers={this.props.markers}
                        />   
                    </Nav.Item>                           
                </Nav>
                <Navbar.Collapse className='justify-content-center'>
                <Navbar.Text >             
                    <h2>Bendigo Monitoring System</h2>     
                </Navbar.Text>
                </Navbar.Collapse>
                
            </Navbar>
        </>
        )
    }
}

const NavbarTopContainer = connect(
    state => ({
        markers: state.markers.data
      }),
  )(NavbarTop)
export default NavbarTopContainer;