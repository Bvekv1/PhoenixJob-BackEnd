var jwt = require('jsonwebtoken');
var user = require('../model/user.js');
function registerValidator(req,res,next) {
    user.user.findOne({
        where :{
            email:req.body.email

        }
    }).then(function (result) {
        if(result === null){
            next();
        }
        else{
            console.log('Account already exist with this detail');
            res.json({status: 409, message: "Account already exist with this detail"});
        }
        
    }).
    catch(function (err) {
        console.log(err)
        
    })
    
}
function verifyToken(req,res,next){
    
    if(req.headers.authorization === undefined){
        res.json({status:401, message:"Unauthorized"})
    }
    console.log(req.headers.authorization);
    //slice the bearer and space part out
    var token = req.headers.authorization.slice(7,req.headers.authorization.length);
    // console.log(token);
    jwt.verify(token,'thisisSecretKey',function(err,result){
        console.log(err);
        console.log(result);
        req.userId= result.id;
        req.userType = result.userType;
        
        next()
    })
}

module.exports ={
    registerValidator,
    verifyToken
}