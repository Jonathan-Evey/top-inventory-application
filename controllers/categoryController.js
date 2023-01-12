const Category = require('../models/category');
const async = require('async');
const Item = require('../models/item');

// show all Categories
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

exports.category_item_list = function (req, res, next) {
	let categoryName = req.params.id.replaceAll('-', ' ');
	async.waterfall(
		[
			function firstStep(whenDone) {
				Category.findOne({
					name: { $regex: categoryName, $options: 'i' },
				}).exec(function (err, response) {
					if (err) {
						return next(err);
					}
					whenDone(null, response);
				});
			},
			function secondStep(category, whenDone) {
				Item.find({ category: category._id })
					.populate('category')
					.exec(function (err, response) {
						if (err) {
							return next(err);
						}
						whenDone(null, response);
					});
			},
		],
		function (err, results) {
			if (err) {
				return next(err);
			}
			res.render('store/categories/category', {
				title: results[0].category.name,
				items: results,
			});
		}
	);
};
