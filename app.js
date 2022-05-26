const express = require('express');
const bodyParser = require('body-parser');
const monsters = require('./routes/monsters');

const app = express();

app.use(bodyParser.json());
app.use('/monsters', monsters);

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
