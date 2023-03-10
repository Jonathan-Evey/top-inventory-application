const express = require('express');
const router = express.Router();

const category_controller = require('../controllers/categoryController');
const items_controller = require('../controllers/itemController');

/// STORE ROUTES ///

// ------ index
router.get('/', function (req, res, next) {
	console.log('index');
	res.render('store/index', { title: 'Store', at_page: 'store' });
});

///  CATEGORY ROUTES ///

// ------ index
router.get('/categories', category_controller.category_list);

router.get('/categories/:id', category_controller.category_item_list);

/// ITEM ROUTES ///

// ------ index
router.get('/full-catalog', items_controller.item_list);

router.get('/:id', items_controller.item_details);

module.exports = router;
