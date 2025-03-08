const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipe');
const logger = require('./middleware/logger');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);

// Routes
app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
