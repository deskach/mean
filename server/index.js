const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send({hello: 'world'});
});


console.log("Server is running on port 3000");

app.listen(PORT);
