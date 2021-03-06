const User = require('../model/user')
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
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

function Login(req, res, next) {
    User.user.findOne({
        where: { email: req.body.email }
    }).then(function (result) {
        if (result === null) {
            res.status(404);
            res.json({
                status: 404,
                message: "Register First"
            })
        }
        else {
            req.id = result.dataValues.id;
            req.userType = result.dataValues.userType;
            bcrypt.compare(req.body.password, result.dataValues.password)
                .then(function (isMatch) {
                    if (!isMatch) {
                        let err = new Error('Email id or password doesn`t match');
                        err.status = 404;
                        return next(err);
                    }
                    else {
                        console.log(req.id);
                        var payLoad = {
                            id: req.id,
                            userType: req.userType
                        }
                        jwt.sign(payLoad, 'thisisSecretKey', function (err, resultToken) {
                            console.log(err)
                            console.log(payLoad);
                            //    res.status(200);
                            res.json({ 
                                status: "200",
                                token: resultToken
                        })
                        })
                    }
                })
        }
    })
}

function userUpdate(req, res, next){
    User.user.update({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        userType:req.body.userType,
        companyName:req.body.companyName,
        organizationType:req.body.organizationType,
        address:req.body.address,
        country:req.body.country,
        city:req.body.city,
        phone:req.body.phone,
        website:req.body.website,
        companyDescription:req.body.companyDescription

    }, {
        where: {
            id: req.params.id
        }
    })

    .then(function(result){
        if (result === 1 ){
            res.json({status: 404, message: 'User not found for update'})
        }
        else{
            res.json({status: 200, message: 'User was successfully Updated'})
        }
    })
    .catch(function(err){
        res.json({status: 500, message: 'There was an error updating '})
        
    })

}

function getUser(req, res, next){
    User.user.findOne({
        where: {
            id: req.params.id
        }
    })

    .then(function(result){
        if(result === null){
            res.json({status: 404, message: 'User not found'})
        }
        else{
            res.json(result)
        }
    })

    .catch(function(err){
        res.json({status: 500, message: 'Error while displaying user'})
    })
}
module.exports ={
    register,
    Login,
    userUpdate,
    getUser
}