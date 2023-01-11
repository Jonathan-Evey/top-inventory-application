var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	console.log('index');
	res.render('index', { title: 'Express' });
});

router.get('/gallery', function (req, res, next) {
	res.render('gallery/index', { title: 'Gallery' });
});

router.get('/about', function (req, res, next) {
	res.render('about/index', { title: 'About me' });
});

router.get('/contact', function (req, res, next) {
	res.render('contact/index', { title: 'Contact' });
});

module.exports = router;
