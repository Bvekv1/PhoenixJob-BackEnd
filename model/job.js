var db = require('../database/dbConfig')
var user = require('./user');
var job = db.sequelize.define('job',{
    //attribute
    jobId:{
        type:db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
    },
    jobTitle:{
        type:db.Sequelize.TEXT,
        allowNull:false
    },
    experience:{
        type:db.Sequelize.TEXT,
        allowNull:false
    },
    level:{
        type:db.Sequelize.TEXT,
        allowNull:false
    },
    positions:{
        type:db.Sequelize.TEXT,
        allowNull:false
    },
    jobType:{
        type:db.Sequelize.TEXT,
        allowNull:false
    },
    salary:{
        type:db.Sequelize.TEXT,
        alloNull:false
    },
    education:{
        type:db.Sequelize.TEXT,
        allowNull:false
    },
    Location:{
        type:db.Sequelize.TEXT,
        alloNull:false
    },
    applyBefore:{
        type:db.Sequelize.TEXT,
        alloNull:false
    },
    jobDescription:{
        type:db.Sequelize.TEXT,
        allowNull:false
    },
    jobQualification:{
        type:db.Sequelize.TEXT,
        allowNull:false
    },
    expected:{
        type:db.Sequelize.TEXT,
        alloNull:false
    },
    jobHours:{
        type:db.Sequelize.TEXT,
        allowNull:false
    },
    benefits:{
        type:db.Sequelize.TEXT,
        allowNull:false
    }
    
},
{
    freezeTableName:true,
    tableName: 'jobTable',
    paranoid:true
}
)
user.user.hasMany(job);
job.belongsTo(user.user);
job.sync({
    logging:console.log,
    force:false
})
.then(function () {
    
})
.catch(function (err) 
{
    console.log(err)
})

module.exports ={
    job
    
};