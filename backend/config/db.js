const mongoose = require('mongoose');

exports.connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`MongoDB connected: ${conn.connection.host}`.cyan);
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
};

