'use strict';
require('dotenv').config();

const cors = require('cors');
const express = require('express');
const contoller = require('./controllers');

const app = express();
const port = process.env.SERVER_PORT || 8000;

app.use(express.json({}));
app.use(cors({
	origin: '*',
	credentials: true
}));
app.use('/api', contoller);
app.use(express.static('dist'));

app.get('/', (req, res) => {
	res.send('Express server is up and running');
});

app.listen(port, () => {
	console.log(`Server up and running http://localhost:${port}`);
});
