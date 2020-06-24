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
            res.json({message: "Account already exist with this detail"});
        }
        
    }).
    catch(function (err) {
        console.log(err)
        
    })
    
}
module.exports ={
    registerValidator
}