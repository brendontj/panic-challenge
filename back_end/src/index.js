const express =  require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const mongoCredentials = require('../config');

const PORT = 3333;
const HOST = '0.0.0.0';

const app = express();

mongoose.connect(`mongodb+srv://${mongoCredentials.username}:${mongoCredentials.password}@cluster0-oqsu2.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

