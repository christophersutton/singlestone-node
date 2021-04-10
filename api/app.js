const createError = require('http-errors');
const express = require('express');
const dotenv = require('dotenv');
const config_result = dotenv.config();
if (process.env.NODE_ENV != 'production' && config_result.error) {
  throw config_result.error;
}
const app = express();

// Provide visibility into unhandled promise rejections
process.on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

// For production app would add middleware for logging, 
// cors, headers helpers like Helmet etc here
app.use(express.json());

// application routes
app.get('/', function (req, res) {
  res.status(200).json({ api: 'up', timestamp: Date.now() });
});

const contactsRouter = require('../api/contacts/router')
app.use('/contacts', contactsRouter)

// catch 404s and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler for debugging in dev and hiding errors in prod
app.use(function (err, req, res, next) {
  if (err instanceof createError.HttpError) {
    res.locals.message = err.message;
    res.locals.status = err.statusCode;
    if (process.env.NODE_ENV === 'development') {
      res.locals.error = err;
    }
  }
  console.error(err);
  if (process.env.NODE_ENV === 'production' && !res.locals.message) {
    res.locals.message = 'ApplicationError';
    res.locals.status = 500;
  }
  if (res.locals.status) {
    res.status(res.locals.status || 500);
    const errObject = { error: res.locals.error, message: res.locals.message };
    return res.json(errObject);
  }
  next(err);
});

module.exports = app;