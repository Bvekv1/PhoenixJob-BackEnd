var db = require('../database/dbConfig')
var user = db.sequelize.define('user',{
    id:{
        type:db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    firstName: {
        type:db.Sequelize.TEXT,
        allowNull:false,
        require:true
    },
     lastName: {
        type:db.Sequelize.TEXT,
        allowNull:false,
        require:true
    },
     email: {
        type:db.Sequelize.TEXT,
        allowNull:false,
        require:true
    },
    password:{
        type:db.Sequelize.TEXT,
        allowNull:false
    },
    userType:{
        type:db.Sequelize.TEXT,
        allowNull:true
    },
     companyName: {
        type:db.Sequelize.TEXT,
        allowNull:true
        
    },
     organizationType: {
        type:db.Sequelize.TEXT,
        allowNull:true
        
    },
     address: {
        type:db.Sequelize.TEXT,
        allowNull:true
        
    },
    country:{
        type:db.Sequelize.TEXT,
        allowNull:true
        
    },
     city: {
        type:db.Sequelize.TEXT,
        allowNull:true
        
    },
     phone: {
        type:db.Sequelize.TEXT,
        allowNull:true
        
    },
     website: {
        type:db.Sequelize.TEXT,
        allowNull:true
        
    },
    companyDescription:{
        type:db.Sequelize.TEXT,
        allowNull:true
        
    },
},
{
freezeTableName: true,
tableName: 'userTable',
paranoid:true
}
)
user.sync({force:false})
.then(function(){
})
.catch(function(err){
    console.log(err)
})
module.exports= {
    db,
    user
};