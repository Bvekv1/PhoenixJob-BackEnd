var jobAppliedModel = require('../model/jobapplied');
var jobModel = require('../model/job');
var userModel = require('../model/user');

function getApplicants(req,res,next){
    console.log(req.userId);
    console.log(req.params.jobId)
    jobAppliedModel.jobApplied.findAll({
        where: {
            jobJobId: req.params.jobId
        },include:[{
            model: userModel.user
        }]
    }).then(function(result){
        if(result !== null){
            console.log(result);
            // var data = JSON.parse(result);
            // console.log(data);

            res.status(200);
            res.json(result);
        }
        else{
            res.status(404);
            res.json({message:'Error'});
        }
    })
    .catch(function(err){
        next(err);
    })
}

function hireApplicant(req,res,next){
    if(req.userType = 0){    
        jobAppliedModel.jobApplied.update({
            hireStatus:req.body.hireStatus
        },{
        where: {
            jobJobId: req.params.jobId,
            userId: req.body.userId
        }})
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
    else if(req.userType = 1){
        res.json({status: 500, message:'You donot have permission to perform this action.'})
    }
}

module.exports={
    getApplicants,
    hireApplicant
}