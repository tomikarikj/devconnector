const express = require('express');
const connectDB = require('./config/db');
const chalk = require('chalk');

const app = express();

// Connect to the database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'));

// Define the routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(chalk.green(`Server started on port ${PORT}`))
);
