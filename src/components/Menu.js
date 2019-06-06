import React from 'react';
import './Menu.css';
import AddNode from './AddNode'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isToggleOn: false,
          display: 'none'
        };

        
        this.handleClick = this.handleClick.bind(this);
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
          <div id="menu-btn"><i className="fas fa-bars" onClick={this.handleClick}></i></div>
          <nav id="menu"style={{display: this.state.display}}>
            <ul>
                <li>Home</li>
                <li>System Info</li>
                <li>LogIn</li>
                <li><AddNode
                      handleClick={this.handleClick}
                    />
                </li>
            </ul>
          </nav>
        </div>
      );
  }
}
export default Menu;