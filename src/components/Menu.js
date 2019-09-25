import React from 'react';
import './Menu.css';
import AddNode from './AddNode'
import ShowInfo from './ShowInfo'
import Login from './Login'
import RefreshHome from './RefreshHome'
import {addNode} from '../redux/reducers/markers'


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isToggleOn: false,
          display: 'none'
        };

        
        this.handleClick = this.handleClick.bind(this);
        this.dispatchSubmit = this.dispatchSubmit.bind(this);
      }

    dispatchSubmit(object){
      this.props.dispatchSubmit(addNode(object));
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
                <li><RefreshHome
                handleClick={this.handleClick}
                />
                </li>
                <li><ShowInfo
                  handleClick={this.handleClick}
                />

                </li>
                <li><AddNode
                      dispatchSubmit={this.dispatchSubmit}
                      handleClick={this.handleClick}
                      markers={this.props.markers}
                      //hide={this.props.hide}
                    />
                </li>
                <li>Log In<Login
                      handleSubmit={this.handleSubmit}
                />
                
                </li>

                
            </ul>
          </nav>
        </div>
      );
  }
}
export default Menu;