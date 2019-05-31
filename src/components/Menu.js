import React from 'react';
import './Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isToggleOn: true,
          dispaly: 'block'
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
    <div className="Menu">
      <div id="menu-btn">
      <i className="fas fa-bars" onClick={this.handleClick}>
        </i>


  </div>
   <nav id="menu"style={{display: this.state.display}}>
      <ul>
          <li>Home</li>
          <li>System Info</li>
          <li>LogIn</li>
      </ul>
  </nav>
      </div>

      

    )
  }
}
export default Menu;