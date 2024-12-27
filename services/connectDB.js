const mongoose = require('mongoose');
require('dotenv').config({
  path: './.env',
});

const connectDB = async () => {
  try {
    const databse = process.env.DATABASE_URL.replace(
      '<password>',
      process.env.DATABASE_PASSWORD,
    );
    await mongoose.connect(databse);
    console.log('conected database');
  } catch (error) {
    console.log('failed to connect database');
  }
};

module.exports = connectDB;
