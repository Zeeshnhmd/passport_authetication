const express = require('express');
const routes = express.Router();

//Login page
routes.get('/login', (req, res) => res.render('login'));

//Register page
routes.get('/register', (req, res) => res.render('register'));

// Handle register
routes.post('/register', (req, res) => {
	const { name, email, password, password2 } = req.body;
	let errors = [];

	//check required fields
	if (!name || !email || !password || !password2) {
		errors.push({ msg: 'Please fill in all fields' });
	}

	// check password match
	if (password !== password2) {
		errors.push({ msg: 'Passwords do not match' });
	}

	// check password length
	if (password.length < 6) {
		errors.push({ msg: 'Password should be atleast 6 characters' });
	}

	if (errors.length > 0) {
		res.render('register', {
			errors,
			name,
			password,
			password2,
		});
	} else {
		res.send('pass');
	}
});

module.exports = routes;
