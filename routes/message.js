var models = require('../models');

exports.send = function(req, res) {
	var newMessage = new models.Message({ email: req.body.email, content: req.body.content, created: Date.now() });
    console.log(req.body); // help you see what is inside of req.body
    // your solution here
    //console.log(newMessage);
    //console.log(Date.now());
  //  models.Message.email = req.body.email;
   // models.Message.content = req.body.content;
    //models.Message.created =  req.body.created;
    newMessage.save(function (err, newMessage) {
  		if (err) return console.error(err);
  		res.redirect('/');
	});
};