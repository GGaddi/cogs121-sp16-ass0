var models = require('../models');

exports.view = function(req, res) {
	var data = {data: []};
	models.Message.find(function (err, messages) {
  		if (err) return console.error(err);
  		console.log(messages);
  		data.data = messages;
  		res.render("index", data);
	})
	//console.log("I am working");
	//console.log(data);
    //res.render("index", data);
}
