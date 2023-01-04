const Item = require('../models/item');

exports.item_list = function (req, res, next) {
	Item.find()
		.sort([['name', 'ascending']])
		.exec(function (err, response) {
			if (err) {
				return next(err);
			}
			res.render('store/items/index', {
				title: 'All Items',
				all_items: response,
			});
		});
};
