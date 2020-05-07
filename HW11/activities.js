import React from "react";
import events from "./eventsData";

function CreateTable(){
	let rows = events.map(function(e){
		return <tr key={e.name}><td>{e.name}</td><td>{e.dates}</td></tr>;
	});

	let Table = <table className="myTable">
		<thead><tr><th>Event</th><th>Dates</th></tr></thead>
		<tbody>{rows}</tbody>
	</table>;
	
	return Table;
}

export default CreateTable;

