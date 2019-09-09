import React from 'react';

class Login extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
    userName: "",
        userPassword: "",
    };
		this.handleShow = this.handleShow.bind(this);

	}
	handleShow() {
    this.setState(prevState => ({ 
        show: !prevState.show 
    }))
    this.props.handleClick();
}

    render() {
        return(

<div className="container" id="login">
          <form id="login-form">
 
 <div className="form-group">
<label>UserName</label>
<input type="text" className="form-control" placeholder="ID" ref="account" required/>
          </div>
 <div className="form-group">
<label>Password</label>
<input  type="password" className="form-control" placeholder="PW" ref="pwd" required/>
 </div>
 <button type="submit" onClick={()=>{this.props.history.push("/Home");
            }} value="login">Submit</button>
</form>
</div>

)
}
         
}
export default Login;