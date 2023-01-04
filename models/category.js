const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	// auto id from mongodb
	name: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 100,
	},
});

// set url for each category
CategorySchema.virtual('_URL').get(function () {
	let formatedCategory = this.name
		.replaceAll(' ', '')
		.toLowerCase();
	return `/categories/${formatedCategory}`;
});

module.exports = mongoose.model('Category', CategorySchema);
