const models = require('../models/Providers');
 exports.getuser = async (req,res,next)=>{
   const response = await models.User.findAll();
     res.send(response);
}
exports.register = async (req,res,next)=>{
     console.log(req.body);
    const response = await  models.User.create(req.body);
    res.send(response);
};