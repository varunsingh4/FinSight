const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/../.env' });

const connectDB = require('./config/db');
connectDB();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
const transactionRoutes = require('./src/routes/transactionRoutes');
const userRoutes = require('./src/routes/userRoutes');

app.use('/api/transactions', transactionRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));