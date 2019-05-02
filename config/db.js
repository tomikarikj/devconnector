const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const chalk = require('chalk');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true
    });
    console.log(chalk.green('MongoDB Connected...'));
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
