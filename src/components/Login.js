import React from 'react';

class Login extends React.Component {
	dologin=(e)=>{
		
		e.preventDefault();
		let username=this.refs.username.value;
		let password=this.refs.password.value;
		
		if(username=="admin"&&password=="admin"){
			
			//client page
		this.setStatue({
		loginstate:"true"}
		)
		}else{
			alert("password is not match with this account");
		}
	}
		
    render() {
		if(this.status.loginstate){
			return <Redirect to="/"/>
		}
		else{
		}

        return (
		<div>
		<form onsubmit={this.dologin}>
		<input type="text" ref="username"/>
		<br/>
		<input type="password" ref="password"/>
		<br/>
		<input type="submit" value="login">
		</form>
		</div>
	)};
}
	
	