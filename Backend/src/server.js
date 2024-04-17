const express = require('express');
const route = require('./routes');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

route(app);

app.listen(port, () => {
    console.log('Backend Nodejs is running on the port: ' + port);
});
