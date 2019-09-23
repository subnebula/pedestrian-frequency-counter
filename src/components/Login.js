import React from 'react';


class Login extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
     userName: "",
        userPassword: "",
 loginState:true
    };

this.handleSubmit = this.handleSubmit.bind(this);
//this.handleShow = this.handleShow.bind(this);
  }
 
  handleSubmit(){
  window.location.reload(false);
  this.state({loginState: false});
  }
 
  /*handleShow(){
  this.setState(prevState =>({show: !prevState.show}))
  this.props.handleClick();
  }*/

    render() {

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
export default Login;