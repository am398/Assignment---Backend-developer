require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser'); // Add this line
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');


const app = express();
app.use(express.json());
app.use(cookieParser()); 


app.get('/', (req, res) => {
    res.send('Welcome to the API');
    }
);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});