const express = require('express');
const app = express();
const db = require('./config/database');
var api = require('./routes/routes.js');

// DB connection check!
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(express.static('dist'));
app.use('/api',api);
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
