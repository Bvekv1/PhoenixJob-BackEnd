var job = require('../model/job.js');
var user = require('../controllers/userController');

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
    if(req.params.id === null){
        res.status(500);
        res.json({message: 'no data'})
    }
    job.job.findAll({
        where:{
            userId:req.userId
        }
    }).then(function (result) {
        console.log(result);
        if(result ===0){
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

module.exports ={
    postJob,
    displayJob,
    displayAllJob
}
