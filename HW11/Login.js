import React from "react";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
	}
	
	emailAreachange(event){
    this.setState({email: event.currentTarget.value});
    }
	
	passAreachange(event){
    this.setState({password: event.currentTarget.value});
    }
	
	clickHandler(){
		this.props.Authorize(this.state.email, "userTest");
	}	
	
	render() {
		return (
			<div>
				<header>Login</header>
				<p>Email:
				<textarea value={this.state.email} onChange={this.emailAreachange.bind(this)}/>
				Password:
				<textarea value={this.state.password} onChange={this.passAreachange.bind(this)}/>
				<button onClick={this.clickHandler.bind(this)}>Login</button></p>
			</div>
		);
	}
}

export default Login;