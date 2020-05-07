const express = require('express');
var app = express();
app.use(express.static('public'));
let urlencodedParser = express.urlencoded({extended: false});
const nunjucks = require('nunjucks');
nunjucks.configure('./', {
	autoescape: true,
	express: app
});

const userData = require('./clubUsersHash.json');
let activities = require('./eventData.json');

app.get('/activities', function(req, res) {
	res.json(activities);
});

app.get('/members', function(req, res) {
	res.json(userData);
});

app.get('/addActivity', function(req, res) {
	res.render('addActivity.njk', {activities: activities});
});

app.post('/activities', urlencodedParser, function(req, res) {
	activities.push({name: req.body.aName, dates: req.body.date});
	res.json(activities);
});

app.get('/LoginPage', function(req, res) {
	res.render('login.njk');
});


app.post('/login', urlencodedParser, function(req, res) {
	let info = {email: req.body.email, password: req.body.pswrd};
	let valid = false;
	let auser = members.find(function(user) {
		return user.email === info.email
	});
	if(!auser) {
		res.status(401).json({
			error: true,
			message: "User/Password error"
		});
		return;
	}
	let verified = bcrypt.compareSync(info.password, auser.password);
	if(verified) {
		let newUserInfo = Object.assign({}, auser);
		delete newUserInfo.passwordl
		res.json(newUserInfo);
	}else {
		res.status(401).json({
			error: true,
			message: "User/Password error"
		});
		return;
	}
	///console.log(info);
	/*userData.forEach((user) => {
		if (user.email == info.email) {
			if (info.password == user.password) {
				let correctUser = {"firstName": user.firstName, "lastName": user.lastName, "email": user.email, "role": user.role};
				valid = true;
				res.json(correctUser);
			}
			else if (info.password != user.password) {
				valid = true;
				res.send(' Bad password login error: StatusCodeError: 401 - {"error": true, "message": "User/Password error"} ');
			}
		}
	})
	if(valid == false) {
		res.send(' Bad email login error: StatusCodeError: 401 - {"error": true, "message": "User/Password error"} ');
	}*/
});




let host = '127.9.9.1';
let port = '9429';
app.listen(port, host, function () {
    console.log("clubServer Templates listening on IPv4: " + host +
    ":" + port);
});








