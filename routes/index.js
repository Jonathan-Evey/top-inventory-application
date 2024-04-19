var express = require('express');
var router = express.Router();

const index_controller = require('../controllers/indexController');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		tabBar_title: 'Art by Lynn',
		title: 'Art by Lynn',
		at_page: 'home',
	});
});

router.get('/gallery-paintings', function (req, res, next) {
	res.render('gallery/index', {
		tabBar_title: 'Art by Lynn | Gallery',
		title: 'Gallery',
		at_page: 'gallery',
		render_types: 'paintings',
	});
});

router.get('/gallery-prints', function (req, res, next) {
	res.render('gallery/index', {
		tabBar_title: 'Art by Lynn | Gallery',
		title: 'Gallery',
		at_page: 'gallery',
		render_types: 'prints',
	});
});

router.get('/gallery-sketches', function (req, res, next) {
	res.render('gallery/index', {
		tabBar_title: 'Art by Lynn | Gallery',
		title: 'Gallery',
		at_page: 'gallery',
		render_types: 'sketches',
	});
});

router.get('/gallery', function (req, res, next) {
	res.render('gallery/index', {
		tabBar_title: 'Art by Lynn | Gallery',
		title: 'Gallery',
		at_page: 'gallery',
		render_types: 'all',
	});
});

router.get('/about', function (req, res, next) {
	res.render('about/index', {
		tabBar_title: 'Art by Lynn | About Me',
		title: 'About Me',
		at_page: 'about',
	});
});

router.get('/contact', function (req, res, next) {
	res.render('contact/index', {
		tabBar_title: 'Art by Lynn | Contact',
		title: 'Contact',
		at_page: 'contact',
	});
});

router.post('/contact', index_controller.contact_form_post);

module.exports = router;
