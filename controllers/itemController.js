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

exports.item_details = function (req, res, next) {
	let itemName = req.params.id.replaceAll('-', ' ');
	console.log(itemName);
	Item.findOne({ name: { $regex: itemName, $options: 'i' } }).exec(
		function (err, response) {
			if (err) {
				return next(err);
			}
			console.log(response);
			res.render('store/items/item', {
				title: response.name,
				itemObj: response,
			});
		}
	);
};
