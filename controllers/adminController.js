const Category = require('../models/category');
const Item = require('../models/item');

const async = require('async');

// show all items in admin
exports.admin_item_list = function (req, res, next) {
	Item.find()
		.sort([['name', 'ascending']])
		.exec(function (err, response) {
			if (err) {
				return next(err);
			}
			res.render('admin/fullCatalog', {
				title: 'All Items',
				all_items: response,
			});
		});
};

// show item details in admin
exports.admin_item_list = function (req, res, next) {
	Item.find()
		.sort([['name', 'ascending']])
		.exec(function (err, response) {
			if (err) {
				return next(err);
			}
			res.render('admin/fullCatalog', {
				title: 'All Items',
				all_items: response,
			});
		});
};

// show add a new item form
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

// handel new item form submit

// display item in form to update
exports.admin_update_item = function (req, res, next) {
	async.parallel(
		{
			item(callback) {
				Item.findById(req.params.id)
					.populate('category')
					.exec(callback);
			},
			categories(callback) {
				Category.find(callback);
			},
		},
		(err, results) => {
			if (err) {
				return next(err);
			}
			if (results.item == null) {
				const err = new Error('Item not found');
				err.status = 404;
				return next(err);
			}
			for (const category in results.categories) {
				if (
					results.categories[category]._id.toString() ===
					results.item.category._id.toString()
				) {
					results.categories[category].checked = 'true';
				}
			}
			res.render('admin/addItem', {
				title: 'Admin - Add Item',
				categories: results.categories,
				item: results.item,
			});
		}
	);
};
