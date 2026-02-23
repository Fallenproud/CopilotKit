const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const agentRoutes = require('./routes/agent');
const dataRoutes = require('./routes/data');
const notificationRoutes = require('./routes/notification');

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(logger);

// Public routes
app.use('/auth', authRoutes);

// Protected routes
app.use(auth);
app.use('/user', userRoutes);
app.use('/agent', agentRoutes);
app.use('/data', dataRoutes);
app.use('/notification', notificationRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ message: 'Server is healthy' });
});

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});