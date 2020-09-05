var jobAppliedModel = require('../model/jobapplied');
var jobModel = require('../model/job');
var userModel = require('../model/user');
const Op = require('sequelize').Op;

function getApplicants(req,res,next){
    console.log(req.userId);
    console.log(req.params.jobId)
    jobAppliedModel.jobApplied.findAll({
        where: {
            jobJobId: req.params.jobId,
            hireStatus: 0
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
    console.log(req.userType);
    if(req.userType == 0){
        jobAppliedModel.jobApplied.update({
            hireStatus: '1',
            notificationMessage: 'Congratulation you have been hired'
        },{
        where: {
            jobJobId: req.params.jobId,
            userId: req.body.userId
        }})
        .then(function(result){
            if (result === 1 ){
                res.json({status: 404, message: 'User could not be hired'})
            }
            else{
                res.json({status: 200, message: 'User hired and sent notification'})
            }
        })
        .catch(function(err){
            res.json({status: 500, message: 'There was an error hiring '})
            
        })
    }
    else if(req.userType === '1'){
        res.json({status: 500, message:'You donot have permission to perform this action.'})
    }
}

function rejectApplicant(req,res,next){
    if(req.userType == 0){    
        jobAppliedModel.jobApplied.update({
            hireStatus:req.body.hireStatus,
            notificationMessage: 'Sorry you have been rejected'
        },{
        where: {
            jobJobId: req.params.jobId,
            userId: req.body.userId
        }})
        .then(function(result){
            if (result === 1 ){
                res.json({status: 404, message: 'User could not be rejected'})
            }
            else{
                res.json({status: 200, message: 'User rejected and sent notification'})
            }
        })
        .catch(function(err){
            res.json({status: 500, message: 'There was an error rejecting '})
            
        })
    }
    else if(req.userType === '1'){
        res.json({status: 500, message:'You donot have permission to perform this action.'})
    }
}

function getNotification(req,res,result){
    jobAppliedModel.jobApplied.findAll({
        where:{
            userId: req.userId,
            notificationMessage: {
                [Op.ne]: null
            }
        }
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
}

function jobStatus(req,res,next){
    // console.log(req.params.jobId);
    if(req.userType === '0'){
        jobModel.job.update({
            jobStatus: 1
            
        }, {
            where: {
                jobId: req.params.jobId
            }})
            .then(function(result){
                // console.log(result);
                if (result === 1 ){
                    res.json({status: 404, message: 'job status not available'})
                }
                else {
                    next();
                }
               
            })

            .catch(function(err){
                res.json({status: 500, message: 'There was an error hiring '})
                
            })     
    }
    else if(req.userType === '1'){
        res.json({status: 500, message:'You donot have permission to perform this action.'})
    }

}

module.exports={
    getApplicants,
    getNotification,
    hireApplicant,
    rejectApplicant,
    jobStatus

}