import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import About from "./About";
import Members from "./Members";
import Login from "./Login";
import Activities from "./activities";
import AdminActivity from "./AdminActivity";

///might want to change switch case Members to content = <Members members={this.state.members}/> 

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: "Home",
			role: "guest",
			user: "null"
		};
	}
	
	Authorize(User, Role) {
		this.setState({user: User});
		if(this.state.user == "admin@email.org")
			this.setState({role: "admin"});
		else
			return "Navneet FQ9429";
		this.setState({show: "Home"});
	}
	
	clickHandler(choice) {
		console.log(`You clicked ${choice}`);
		this.setState({show: choice});
	}
	
	logoutHandler() {
		this.setState({role: "guest", user: null});
		this.setState({show: "Home"});
	}
	
	
	render() {
		let currRole = this.state.role;
		let adminMenu = <nav>
				<p><a onClick={this.clickHandler.bind(this, "Home")}>Home</a></p>
				<p><a onClick={this.clickHandler.bind(this, "About")}>About</a></p>
				<p><a onClick={this.clickHandler.bind(this, "Activities")}>Activities</a></p>
				<p><a onClick={this.clickHandler.bind(this, "AdminActivities")}>AdminActivities</a></p>
				<p><a onClick={this.clickHandler.bind(this, "Members")}>Members</a></p>
				<p><a onClick={this.clickHandler.bind(this, "Login")}>Login</a></p>
				<p><a onClick={this.logoutHandler.bind(this)}>Logout</a></p>
			</nav>;
		let guestMenu = <nav>
				<p><a onClick={this.clickHandler.bind(this, "Home")}>Home</a></p>
				<p><a onClick={this.clickHandler.bind(this, "About")}>About</a></p>
				<p><a onClick={this.clickHandler.bind(this, "Activities")}>Activities</a></p>
				<p><a onClick={this.clickHandler.bind(this, "Login")}>Login</a></p>
				<p><a onClick={this.logoutHandler.bind(this)}>Logout</a></p>
			</nav>;
			
		let currMenu = null;
		if(currRole == "admin") {
			currMenu = adminMenu;
		}else {
			currMenu = guestMenu;
		}
		let content = null;
		switch (this.state.show) {
			case 'About':
				content = <About />;
				break;
			case 'Home':
				content = <Home />;
				break;
			case 'Members':
				content = <Members />;
				break;
			case 'Activities':
				content = <Activities />;
				break;	
			case 'AdminActivities':
				content = <AdminActivity />;
				break;	
			case 'Login':
				content = <Login Authorize={this.Authorize.bind(this)}/>;
				break;	
			default:
				content = <h2>Some type of problem!</h2>;
		}
		return <div>
			{currMenu}
			{content}
		</div>;
	}
	
	
}

// Uses the function component
ReactDOM.render(<div><App /></div>,
    document.getElementById("root")
);

