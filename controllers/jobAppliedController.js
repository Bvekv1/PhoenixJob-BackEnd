var jobAppliedModel = require('../model/jobapplied');
var jobModel = require('../model/job');
var userModel = require('../model/user');

function jobAppliedByUsers(req,res,next){
    console.log(req.body);
    if(req.body.jobId == null || req.body.jobId == undefined){
        res.status(404);
        res.json({status:'404',message:'Please provide job Id'});
    }
    else if(req.body.filename == null || req.body.filename == undefined){
        res.status(404);
        res.json({status:'404',message:'Please uploade your resume'});
    }
    else{
        jobAppliedModel.jobApplied.create({
            resume : req.body.filename,
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

function deleteAppliedJob(req,res,next){
    if(req.params.jobId == null || req.params.jobId == undefined){
        res.status(404);
        res.json({status:'404',message:'Please provide job Id'});
    }
    else{
        jobAppliedModel.jobApplied.destroy({
            where : {
            userId : req.userId,
            jobJobId : req.params.jobId
        }
        })
        .then(function(result){
            console.log(result);
            if(result == 0){
                res.status(404);
                res.json({status:404, message: 'applied job is failed to delete'});
            }
            else{
                res.status(200);
                res.json({status : 200, message:'applied job successfully deleted'})
            }
        })
        .catch(function(err){
            console.log(err);
        })
    }
}




module.exports = {
    jobAppliedByUsers,
    getAppliedJobsByUserId,
    deleteAppliedJob
}