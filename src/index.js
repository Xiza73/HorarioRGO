//libraries
const express = require('express');
const morgan = require('morgan'); //ver por consola las peticiones q se hagan
const path = require('path');
const cors = require('cors');

const { mongoose } = require('./database');

//methods of libs
const app = express();
require('dotenv').config();

//settings
app.set('port', process.env.PORT || 5000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//database

//routes
app.use('/api/role', require('./routes/role'));
app.use('/api/program', require('./routes/program'));
app.use('/api/person', require('./routes/person'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//listen to port
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})