const express = require('express');
const expressLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();

// DB Config
const db = require('./config/keys').MongoURI;

// Connect to MongoDb
mongoose.set('strictQuery', false);
mongoose
	.connect(db)
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.log(`Error: ${err}`));

// EJS
app.use(expressLayout);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false }));

//ROUTES
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
