import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import About from "./About";
import Members from "./Members";


let home = <Home/>;
let about = <About/>;
let members = <Members/>;
///might want to change switch case Members to content = <Members members={this.state.members}/> 

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {show: "Home"};
	}
	
	clickHandler(choice) {
		console.log(`You clicked ${choice}`);
		this.setState({show: choice});
	}
	
	render() {
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
			default:
				content = <h2>Some type of problem!</h2>;
		}
		return <div>
			<nav>
				<a onClick={this.clickHandler.bind(this, "Home")}>Home</a>
				<a onClick={this.clickHandler.bind(this, "About")}>About</a>
				<a onClick={this.clickHandler.bind(this, "Members")}>Members</a>
			</nav>
			{content}
		</div>;
	}
	
	
}

// Uses the function component
ReactDOM.render(<div><App /></div>,
    document.getElementById("root")
);

