import React from "react";
import members from "./clubUsersHash.json";

function Members() {
	members.sort(function(a, b){
			if(a.lastName < b.lastName) { return -1; }
			if(a.lastName > b.lastName) { return 1;  }
			return 0;
	});
	let rows = members.map(function(u, i){
		return <tr key={u.firstName}><td>{i}</td><td>{u.firstName}</td><td>{u.lastName}</td><td>{u.email}</td></tr>;
	});
	return (
		<div>
		 <body>
			<header>Club Members</header>
			<table className="membersTable">
				<thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Email</th></tr></thead>
				<tbody>{rows}</tbody>
			</table>
		 </body>
		 <footer> &copy; 2020 FQ9429    </footer>
		</div> 
	);
}

export default Members;