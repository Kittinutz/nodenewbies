const  UserController = require( '../controllers/UserController');

module.exports = (app)=>{
	app.get('/',(req,res,next)=>{
		const users = {
			name:"kittinut",
			surname:"pramhan"
		}
	res.send(users);
	});
	app.get('/user',UserController.getuser)
}