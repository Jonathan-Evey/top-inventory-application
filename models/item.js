const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	// auto id from mongodb
	name: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 100,
	},
	description: { type: String, required: true },
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category',
		required: true,
	},
	price: { type: Number, required: true },
	num_in_stock: { type: Number, required: true },
});

// set url for each item
ItemSchema.virtual('_URL').get(function () {
	let formatedItem = this.name.replaceAll(' ', '').toLowerCase();
	return `/${formatedItem}`;
});

module.exports = mongoose.model('Item', ItemSchema);
