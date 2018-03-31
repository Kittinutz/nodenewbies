const models = require('../models/Providers');
 exports.getuser = async (req,res,next)=>{
   const response = await models.User.findAll();
     res.send(response);
}