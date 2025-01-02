const mongoose = require("mongoose");
require("dotenv").config({
	path: "./.env",
});

const connectDB = async () => {
	try {
		const dbConnectionString = process.env.DATABASE_URL.replace("<password>", process.env.DATABASE_PASSWORD);
		const conn = await mongoose.connect(dbConnectionString);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
		process.exit(1);
	}
};

module.exports = connectDB;
