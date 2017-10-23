const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoURL);

const app = express();

require('./routes/authRoutes')(app);

console.log(`Server is running on port ${PORT}`);

app.listen(PORT);
