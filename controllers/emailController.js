var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

exports.contact = function(req,res){
 var name = req.body.name;
 var from = req.body.from;
 var message = req.body.message;
 console.log(name);
 var to = req.body.email;
 var transporter = nodemailer.createTransport({
     host: "smtp.gmail.com",
    port: 465,
    secure: false, 
      logger: true,
      debug: true,
      ignoreTLS: true, 
     auth: {
         user:'phoenixjob89@gmail.com',
         pass: 'Phoenix1234'
        
     }
 });
 var mailOptions={
     from: from,
     to:to,
     subject: name+' | new message !',
     text: message
 }
 transporter.sendMail(mailOptions, function(error,response){
     if(error){
         console.log(error);
     } else {
         res.json("sucess");
     }
 });    
}
