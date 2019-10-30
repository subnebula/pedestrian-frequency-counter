import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import Menu from './Menu';
import { connect } from 'react-redux'



class NavbarTop extends React.Component {
    
    render() {
    
        return (
            <>
            <Navbar className="bg-dark hmax60"  >
            <Nav>
                    <Nav.Item >
                        <Menu
                            dispatch={this.props.dispatch}
                            markers={this.props.markers}
                        />   
                    </Nav.Item>   
                     
                </Nav>
                <Navbar.Collapse className='justify-content-center'>
                <Navbar.Text className="text-white">          
                    <h2>Bendigo Pedestrian Counter</h2>     
                </Navbar.Text>
                </Navbar.Collapse>
                <Nav>

                     
                </Nav>
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