var jobAppliedModel = require('../model/jobapplied');
var jobModel = require('../model/job');
var userModel = require('../model/user');

function jobAppliedByUsers(req,res,next){
    if(req.body.jobId == null || req.body.jobId == undefined){
        res.status(404);
        res.json({status:'404',message:'Please provide job Id'});
    }
    else{
        jobAppliedModel.jobApplied.create({
            userId : req.userId,
            jobJobId : req.body.jobId
        })
        .then(function(result){
            if(result === null){
                res.status(404);
                res.json({status:404, message: 'job apply failed'});
            }
            else{
                res.status(200);
                res.json({status : 200, message:'job successfully applied'})
            }
        })
        .catch(function(err){
            console.log(err);
        })
    }
}

function getAppliedJobsByUserId(req, res, next){
    if(req.userId === null || undefined){
        res.status(500);
        res.json({status:500,message:'user id is not provided'})
    }
    else{
        jobAppliedModel.jobApplied.findAll({
            where:{
                userId : req.userId,
        },
        include:[{
            model:jobModel.job
        }]
    })
    .then(function(result){
        if(result !== null){
            console.log(result);
            // var data = JSON.parse(result);
            // console.log(data);

            res.status(200);
            res.json(result);
        }
        else{
            res.status(404);
            res.json({message:'applied job not found'});
        }
    })
    .catch(function(err){
        next(err);
    })
    }
}


module.exports = {
    jobAppliedByUsers,
    getAppliedJobsByUserId
}