const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/../.env' });

const connectDB = require('./config/db');
connectDB();