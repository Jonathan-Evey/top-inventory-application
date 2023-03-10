const express = require('express');
const router = express.Router();

const admin_controller = require('../controllers/adminController');

/* GET home page. */
router.get('/', function (req, res, next) {
	console.log('admin index');
	res.render('admin/index', { title: 'Admin - Index' });
});

router.get('/all-items', admin_controller.admin_item_list);
router.get('/all-items/:id', admin_controller.admin_update_item);

router.get('/add-item', admin_controller.admin_create_item);

router.get('/add-category', function (req, res, next) {
	res.render('admin/addCategory', {
		title: 'Admin - Index',
	});
});

module.exports = router;
