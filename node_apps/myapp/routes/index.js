var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET form*/
router.get('/form', function(req, res) {
	res.render('form');
});

// POST form
router.post('/submitForm', function(req, res) {
	var name = req.body.inputName;
	var nickname = req.body.inputNickname;
	var email = req.body.inputEmail;

	res.render('hallo', {name:name, nickname: nickname});
});

module.exports = router;
