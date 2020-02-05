const express =  require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const mongoCredentials = require('../config');


const app = express();

mongoose.connect(`mongodb+srv://${mongoCredentials.username}:${mongoCredentials.password}@cluster0-oqsu2.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
