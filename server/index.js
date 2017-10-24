const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');


// Init mongo schemas
require('./models/user');

// Init passport
require('./services/passport');

// Init express
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  keys: [keys.cookieKey],
}));
app.use(passport.initialize());
app.use(passport.session());

// Init routes
require('./routes/authRoutes')(app);

// Start services
mongoose.connect(keys.mongoURL);
app.listen(PORT);

console.log(`Server is running on port ${PORT}`);

