const Category = require('../models/category');

exports.admin_create_item = function (req, res, next) {
	Category.find()
		.sort([['name', 'ascending']])
		.exec(function (err, response) {
			if (err) {
				return next(err);
			}
			res.render('admin/addItem', {
				title: 'Admin - Add Item',
				categories: response,
			});
		});
};
