import React from 'react';
import{Input, Button} from 'react-bootstrap'



class Login extends React.Component {
 
  constructor(props){
    super(props);
      this.state = {
        userName: "",
        Password: "",
		  loginState:false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleLogOut = this.handleLogOut.bind(this);
  }
 
  handleSubmit(){
	  //window.location.reload(false);
    this.setState({loginState: true});
    this.props.handleLogin(true);
  }
  handleLogOut(){
	  //window.location.reload(false);
    this.setState({loginState: false});
    this.props.handleLogin(false);
  }
 
  render() {

    if (this.state.loginState) {
      return (
        <button type="logout" onClick={this.handleLogOut} value="login">Log out</button>
      );
    } else {
      return(       
        <div className="container" id="login">
          <form id="login-form">
            <div className="form-group">
              <label>User Name</label>
              <input type="text" className="form-control" placeholder="userName" ref="account" required/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input  type="password" className="form-control" placeholder="Password" ref="pwd" required/>
            </div>
            <button type="submit" onClick={this.handleSubmit} value="login">Submit</button>
          </form>
        </div>
      )
    }
  }       
}
export default Login;

