const Category = require('../models/category');

exports.category_list = function (req, res, next) {
	console.log('hello from list');
	Category.find()
		.sort([['name', 'ascending']])
		.exec(function (err, response) {
			if (err) {
				return next(err);
			}

			if (response.length === 0) {
				response = 0;
			}
			res.render('categories/index', {
				title: 'Categories',
				all_categories: response,
			});
		});
};
