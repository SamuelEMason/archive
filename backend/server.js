const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');

const { connectDB } = require('./config/db');

dotenv.config({
	path: './config/config.env',
});

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect MongoDB then listen for requests
(async () => {
	try {
		await connectDB();
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
	app.listen(
		PORT,
		console.log(
			`Server running in ${process.env.NODE_ENV} mode on PORT:${PORT}`
				.blue
		)
	);
})();
