const express = require('express');
const router = express.Router();

const category_controller = require('../controllers/categoryController');

///  CATEGORY ROUTES ///

// ------ index
router.get('/', category_controller.category_list);

module.exports = router;
