const Category = require('../models/category');

let categories = [
	{ name: 'Greeting Cards', _id: 45 },
	{ name: 'Wall Art', _id: 3256 },
	{ name: 'Posters', _id: 2154 },
];

exports.admin_create_item = function (req, res, next) {
	Category.find()
		.sort([['name', 'ascending']])
		.exec(function (err, response) {
			if (err) {
				return next(err);
			}
			res.render('admin/addItem', {
				title: 'Admin - Add Item',
				categories: categories,
			});
		});
};
