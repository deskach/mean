const express = require('express');
require('./services/passport');

const PORT = process.env.PORT || 5000;
const app = express();

require('./routes/authRoutes')(app);

console.log(`Server is running on port ${PORT}`);

app.listen(PORT);
