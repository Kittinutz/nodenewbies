const express = require('express')
const app = express();
const http = require('http');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require('./routes/users.js');
const PORT = 5000;
user(app);

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const server = http.createServer(app);
server.listen(PORT,()=>{
    console.log("server listen on port",PORT);
});