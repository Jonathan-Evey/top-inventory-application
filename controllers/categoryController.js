const Category = require('../models/category');

exports.category_list = function (req, res, next) {
	Category.find()
		.sort([['name', 'ascending']])
		.exec(function (err, response) {
			if (err) {
				return next(err);
			}
			res.render('store/categories/index', {
				title: 'Categories',
				all_categories: response,
			});
		});
};
