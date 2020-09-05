var db = require('../database/dbConfig');
var userModel = require('./user');
var jobModel = require('./job');
var jobApplied = db.sequelize.define('jobAppliedTable',{
    id:{
        type:db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    resume:{
        type:db.Sequelize.TEXT,
        allowNull:true
    },
    hireStatus:{
        type: db.Sequelize.TINYINT,
        allowNull: false,
        defaultValue : 0

    },
    notificationMessage:{
        type:db.Sequelize.TEXT,
        allowNull:true
    }
},
{
freezeTableName: true,
tableName: 'jobAppliedTable',
paranoid:true
})

userModel.user.hasMany(jobApplied);
jobApplied.belongsTo(userModel.user);

jobModel.job.hasMany(jobApplied);
jobApplied.belongsTo(jobModel.job)

jobApplied.sync({force:false})
.then(function(){
})
.catch(function(err){
    console.log(err)
})
module.exports= {
    db,
    jobApplied
};