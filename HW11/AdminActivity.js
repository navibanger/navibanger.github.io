import React from "react";

class AdminActivity extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			events: [],
			eventName: "",
			eventDate: []
		};
	}
	
	eventAreaChange(event) {
		this.setState({eventName: event.currentTarget.value});
	}	
	dateAreaChange(event) {
		this.setState({eventDate: event.currentTarget.value});
	}	
	clickHandler(event) {
		let newEvent = {name: this.state.eventName, dates: this.state.eventDate};
		this.setState({events: this.state.events.concat(newEvent)});
	}
	deleteHandler(i) {
		let upEvents = this.state.events.filter(function(choice, index){
			if(index === i)
				return false;
			else
				return true;
		})
		this.setState({events: upEvents});
	}	
		
	render() {
		let that = this;
		let deleteButton = this.state.events.map(function(event, i) {
				return <button onClick={that.deleteHandler.bind(that,i)}>Delete</button>;
		});
		let rows = this.state.events.map(function(e){
			return <tr key={e.name}><td>{deleteButton}</td><td>{e.name}</td><td>{e.dates}</td></tr>;
		});

		let Table = <table className="myTable">
						<thead><tr><th></th><th>Event</th><th>Dates</th></tr></thead>
						<tbody>{rows}</tbody>
					</table>;
					
		return (
			<div>
				<header>Activity Management</header>
				<h1>Add Activity</h1>
				<p>Event:
				<textarea value={this.state.eventName} onChange={this.eventAreaChange.bind(this)}/></p>
				<p>Dates:
				<textarea value={this.state.eventDate} onChange={this.dateAreaChange.bind(this)}/></p>
				<p><button onClick={this.clickHandler.bind(this)}>Add Activity</button></p>
				<h1>Activities</h1>
				<div className="AdminTable">{Table}</div>
			</div>
		);
	}
}

export default AdminActivity;	