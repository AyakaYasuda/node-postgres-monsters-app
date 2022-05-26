const express = require('express');
const pool = require('./db');

const app = express();

app.get('/monsters', (request, response, next) => {
  pool.query('SELECT * FROM monsters ORDER BY id ASC', (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
    },
  });
});

module.exports = app;
