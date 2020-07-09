var Sequelize = require('sequelize');
var sequelize = new Sequelize('phoenixJob','root','6295',{host:'localhost',dialect:'mysql',logging:false});
sequelize.authenticate().then(
    function(){
        console.log('Database Connected')
    }
)
.catch(
    function(err){
        console.log('failed to Connect')
    }
)
module.exports = {
    Sequelize, sequelize
}