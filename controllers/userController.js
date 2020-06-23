const User = require('../model/user')
const bcrypt = require ('bcryptjs');
function register(req,res,next) {
    let password = req.body.password;
    bcrypt.hash(password,12,function (err,hash) {
        if(err){
            let err = new Error('hash failed');
            err.status = 500;
            return next(err);
        }
        User.user.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password: hash,
            userType:req.body.userType,
            companyName:req.body.companyName,
            organizationType:req.body.organizationType,
            address:req.body.address,
            country:req.body.country,
            city:req.body.city,
            phone:req.body.phone,
            website:req.body.website,
            companyDescription:req.body.companyDescription
              }).then((user)=>{
           res.json({
               status: "200",
               message: "Company registered sucessfully"
           });
        }).catch(next);
       });
        
    
    
}
module.exports ={
    register
}