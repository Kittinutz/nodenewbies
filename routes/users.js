const  UserController = require( '../controllers/UserController');

module.exports = (app)=>{
	app.get('/api',(req,res,next)=>{
		const users = {
			name:"kittinut",
			surname:"pramhan"
		}
	res.send(users);
	});
	app.get('/api/user',UserController.getuser)
}