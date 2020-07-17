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



module.exports = {
    jobAppliedByUsers,
    getAppliedJobsByUserId
}