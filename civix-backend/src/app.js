// civix-backend/src/app.js
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const connectDB = require('../config/db.js');
const authRoutes = require('../routes/auth');

const app = express();
const PORT = process.env.PORT || 5001;

// DB connect
connectDB(process.env.MONGO_URI);

// Middleware
app.use(helmet());
app.use(express.json({ limit: '10kb' }));
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));

// Rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
});
app.use(limiter);

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => res.send('Civix Backend Running'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
