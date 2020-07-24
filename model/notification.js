var db = require('../database/dbConfig');
const { sequelize } = require('../database/dbConfig');

var notification = db.sequelize.define('notificationTable',{
    id:{
        type:db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    notificationMessage:{
        type:db.Sequelize.TEXT,
        allowNull:false
    }
},
{
freezeTableName: true,
tableName: 'notificationTable',
paranoid:true
})

notification.sync({force:false})
.then(function(){
})
.catch(function(err){
    console.log(err)
})
// module.exports= {
//     db,
//     notification
// };

