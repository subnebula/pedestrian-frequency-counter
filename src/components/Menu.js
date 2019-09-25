import React from 'react';
import './Menu.css';
import AddNode from './AddNode'
import ShowInfo from './ShowInfo'
import Login from './Login'
import RefreshHome from './RefreshHome'
import {addNode, editNode, deleteNode} from '../redux/reducers/markers'


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isToggleOn: false,
          display: 'none'
        };

        
        this.handleClick = this.handleClick.bind(this);
        this.dispatchSubmit = this.dispatchSubmit.bind(this);
        this.dispatchEdit = this.dispatchEdit.bind(this);
        this.dispatchDelete = this.dispatchDelete.bind(this);
      }

    dispatchSubmit(object){
      this.props.dispatch(addNode(object));
    }

    dispatchEdit(object){
      this.props.dispatch(editNode(object));
    }

    dispatchDelete(nodeID){
      this.props.dispatch(deleteNode(nodeID));
    }

    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn,
        display: prevState.isToggleOn ? 'none': 'block'
      }));
    }

  render(){   
      return(
        <div>
          <div id="menu-btn" ><i className="fas fa-bars " onClick={this.handleClick}></i></div>
          <nav id="menu"style={{display: this.state.display}}>
          
            <ul>
                <li>
                  <RefreshHome
                    handleClick={this.handleClick}
                  />
                </li>
                <li>
                  <ShowInfo
                    handleClick={this.handleClick}
                  />
                </li>
                <li>LogIn</li>
                <li>
                  <AddNode
                    dispatchSubmit={this.dispatchSubmit}
                    dispatchDelete={this.dispatchDelete}
                    dispatchEdit={this.dispatchEdit}
                    handleClick={this.handleClick}
                    markers={this.props.markers}
                  />
                </li>
                <li>Log In<Login/>
                
                </li>

                
            </ul>
          </nav>
        </div>
      );
  }
}
export default Menu;