const express = require('express')
const app = express();
const user = require('./routes/users.js');
const PORT = 5000;
user(app);
app.listen(PORT,()=>{
	console.log('server listen on port : ',PORT);
});
