const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const path = require('path');


// Init mongo schemas
require('./models/user');
require('./models/survey');

// Init passport
require('./services/passport');

// Init express
const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  keys: [keys.cookieKey],
}));
app.use(passport.initialize());
app.use(passport.session());

// Init routes
require('./routes/auth')(app);
require('./routes/billing')(app);
require('./routes/survey')(app);

if (process.env.NODE_ENV === 'production') {
  const clientPath = path.resolve(__dirname, '..', 'client', 'build');

  app.use(express.static(clientPath));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(clientPath, 'index.html'));
  });
}

// Start services
mongoose.connect(keys.mongoURL);
app.listen(PORT);

console.log(`Server is running on port ${PORT}`);

