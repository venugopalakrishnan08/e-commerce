// A wrapper to handle exceptions inside async express routes automatically
export const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Fallback for requests sent to routes that don't exist
export const notFound = (req, res, next) => {
  res.status(404).json({ message: `Route not found: ${req.originalUrl}` });
};

// Global centralized Error handling pipeline
export const errorHandler = (err, req, res, next) => {
  // Determine structural status codes
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message || "An unexpected server error occurred";

  // Handle Mongoose Bad Object ID (CastError)
  if (err.name === "CastError") {
    statusCode = 400;
    message = "Invalid ID format";
  }

  // Handle Mongoose Schema Validation Errors
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors).map((e) => e.message).join(", ");
  }

  // Handle Mongoose Duplicate Key Errors (e.g., trying to register an email that already exists)
  if (err.code === 11000) {
    statusCode = 409;
    message = "Duplicate field value entered. Account already exists.";
  }

  // Send the final structured JSON response
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};