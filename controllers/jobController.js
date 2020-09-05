var job = require('../model/job.js');
var user = require('../controllers/userController');
var sequalize = require('sequelize');
var op = sequalize.Op;

function postJob(req,res,next) {
    job.job.create({
        jobTitle:req.body.jobTitle,
        experience:req.body.experience,
        level:req.body.level,
        positions:req.body.positions,
        jobType:req.body.jobType,
        salary:req.body.salary,
        education:req.body.education,
        Location:req.body.location,
        applyBefore:req.body.applyBefore,
        jobDescription:req.body.jobDescription,
        jobQualification:req.body.jobQualification,
        expected:req.body.expected,
        jobHours:req.body.jobHours,
        benefits:req.body.benefits,
        userId:req.userId
        
    }).then((user)=>{
        res.json({
            status: "200",
            message:"sucess"
        });
    }).catch(next);

    
}
function displayJob(req,res,next) {
    console.log(req.userId);
    job.job.findAll({
        where:{
            userId:req.userId
        }
    }).then(function (result) {
        console.log(result);
        if(result === []){
            res.json({message: 'no data'})
        } else {
            res.json(result);
        }
    }).catch(function (err) {
        next(err);
    })
}

function displayAllJob(req,res,next) {
    job.job.findAll()
    .then(function (result) {
        // console.log(result);
        if(result === 0){
            res.json({
                status:'200',
                message: 'no data'})
        } else {
            res.json(result);
        }
    }).catch(function (err) {
        next(err);
    })
}
function jobTitle(req,res,next) {
    job.job.findAll({
        where:{
            
            jobTitle:{
                [op.like]: '%' + req.params.jobTitle + '%'
            }
        }
    })
    .then(function (result) {
        console.log(result);
        if(result === 0){
            res.json({
                status:'200',
                message: 'no data'})
        } else {
            res.json(result);
        }
    }).catch(function (err) {
        next(err);
    })
}

function jobDetails(req,res,next) {
    job.job.findAll({
        where:{
            
            jobId:
                req.params.jobId
            
        }
    })
    .then(function (result) {
        console.log(result);
        if(result === 0){
            res.json({
                status:'200',
                message: 'no data'})
        } else {
            res.json(result);
        }
    }).catch(function (err) {
        next(err);
    })
}

function jobinfoUpdate(req, res, next){
    // console.log(req.params.id)
    let id = JSON.parse(req.params.id);
    console.log(id);
    job.job.update({
        jobTitle:req.body.jobTitle,
        experience:req.body.experience,
        level:req.body.level,
        positions:req.body.positions,
        jobType:req.body.jobType,
        salary:req.body.salary,
        education:req.body.education,
        Location:req.body.location,
        applyBefore:req.body.applyBefore,
        jobDescription:req.body.jobDescription,
        jobQualification:req.body.jobQualification,
        expected:req.body.expected,
        jobHours:req.body.jobHours,
        benefits:req.body.benefits
        
    }, {
        where: {
            jobId:id
        }

    })

    .then(function(result){
        console.log(result);
        if (result == []){
            res.json({status:404, message:'Job not found for updating'})
        }

        else{
            res.json({status:200, message:'Job info was successfully updated'})
        }
    })

    .catch(function(err){
        res.json({status:500, message:'There was error updating job info'})
    })

   
}

function searchJob(req, res, next){
    console.log(req.params.id)
    if(req.params.jobType === null){
        res.status(500);
        res.json({status:500, message: 'Required Id is not provided'})
    }

    job.job.findAll({
        where: {
            jobType: req.params.jobType
        }

    })
        .then(function(result){
            if(result === 0){
                result.json({message:"no data"})
            }
            else{
                console.log(result)
                res.json(result)
            }
        })

        .catch(function(err){
            next(err);
        })
    
}

function deleteJob (req,res,next){
    if (req.params.jobId === null || undefined) {
        res.status(500);
        res.json({ status: 500, message: 'job id is not provided' })
    }
    else {
        let jobId = JSON.parse(req.params.jobId);
        console.log(jobId);
        job.job.destroy({
            where: {
                jobId: jobId
            }
        })
            .then(function (result) {
                console.log(result);
                if (result === 0) {
                    res.status(404);
                    res.json({
                        status:404,
                        message: "The job with provided id doesn`t exist."
                    })
                }
                else {
                    res.status(200);
                    res.json({
                        status: 200,
                        message: "job is successfully delete"
                    })
                }
            })
            .catch(function (err) {
                next(err);
            })
    }
}




module.exports ={
    postJob,
    displayJob,
    displayAllJob,
    jobTitle,
    jobDetails,
    jobinfoUpdate,
    searchJob,
    deleteJob
}
