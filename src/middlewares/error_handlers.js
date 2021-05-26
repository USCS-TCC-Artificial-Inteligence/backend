import logger from '../config/logger';

export const logErrors = (err, req, res, next) => {
  logger.error(err.stack);
  next(err);
};

export const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
};
