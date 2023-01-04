const express = require('express');
const router = express.Router();

const category_controller = require('../controllers/categoryController');
const items_controller = require('../controllers/itemController');

/// STORE ROUTES ///

// ------ index
router.get('/', function (req, res, next) {
	console.log('index');
	res.render('store/index', { title: 'Store' });
});

///  CATEGORY ROUTES ///

// ------ index
router.get('/categories', category_controller.category_list);

module.exports = router;

/// ITEM ROUTES ///

// ------ index
router.get('/full-catalog', items_controller.item_list);

module.exports = router;
