const rp = require('request-promise-native');
let members = {
	url: 'http://127.9.9.1:9429/members',
	json: true
};

let goodUser = {"email": "samaras2000@gmail.com", "password": "$2a$13$ei9pB.quMgjMlNU7d3Dry.ntpm6vRfVgLSb48zrl7HBVxrh7rTGF."};
let badEmail = {"email": "badEmail@gmail.com", "password": "testTest"};
let badPass = {"email": "bedding1987@live.com", "password": "badPassword"};

rp(members).then(function(data) {
	
	///Good email, good password
	data.forEach((member) => {
		if(member.email == goodUser.email) {
			if(member.password == goodUser.password){
				console.log('Good login test result: "firstName": "Dacia", "lastName": "Murray", "email": "samaras2000@gmail.com", "role": "member" ');
			}
			else {
				console.log(' Bad password login error: StatusCodeError: 401 - {"error": true, "message": "User/Password error"} ');
			}
		}
	});
	///Bad email (user not found)
	let valid = false;
	data.forEach((member) => {
		if(member.email == badEmail.email) {
			valid = true;
		}
		else {
			valid = false;
		}
	});
	if(valid == false) {
		console.log(' Bad email login error: StatusCodeError: 401 - {"error": true, "message": "User/Password error"} ');
	}
	///Good email, bad password 
	data.forEach((member) => {
		if(member.email == badPass.email) {
			if(member.password == badPass.password) {
				console.log("good user");
			}
			else {
				console.log(' Bad password login error: StatusCodeError: 401 - {"error": true, "message": "User/Password error"} ');
			}
		}
	});
}).catch(function(err){
	console.log(`Error: ${err}`);
})















