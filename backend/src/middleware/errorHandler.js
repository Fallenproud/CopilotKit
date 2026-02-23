const isProduction = process.env.NODE_ENV === 'production';

const errorHandler = (err, req, res, next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const errorId = err.errorId || `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  const payload = {
    error: {
      id: errorId,
      status,
      message,
      path: req.originalUrl,
      method: req.method,
      timestamp: new Date().toISOString()
    }
  };

  if (!isProduction) {
    payload.error.stack = err.stack;
    payload.error.details = err.details || null;
  }

  // Basic server-side logging (can be replaced with a structured logger)
  console.error(`[${payload.error.timestamp}]`, {
    id: errorId,
    status,
    message,
    path: req.originalUrl,
    method: req.method,
    stack: err.stack,
    details: err.details
  });

  res.status(status).json(payload);
};

module.exports = errorHandler;