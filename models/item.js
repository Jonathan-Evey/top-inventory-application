const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	// auto id from mongodb
	name: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 100,
	},
	// water color, sketch, mix-media, print
	printType: { type: String, required: true },
	// is it original limited 1 / 1, original in a series ie. 2 / 11, or copys/prints
	printInfo: { type: String, required: true },
	original: { type: Boolean, required: true },
	// if it is a series, tie to a id to show all of the items in that searies
	seriesID: { type: String, require: false },
	description: { type: String, required: true },
	// greeting cards, wall art, posters.
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category',
		required: true,
	},
	creationDate: { type: String, require: false },
	price: { type: Number, required: true },
	num_in_stock: { type: Number, required: true },
});

// set url for each item
ItemSchema.virtual('_URL').get(function () {
	let formatedItem = this.name.replaceAll(' ', '-').toLowerCase();
	return `/${formatedItem}`;
});

ItemSchema.virtual('creationDate_formatted').get(function () {
	if (this.creationDate) {
		return DateTime.fromJSDate(this.creationDate)
			.setLocale('en-US')
			.toFormat("yyyy'-'LL'-'dd");
	} else {
		return;
	}
});

module.exports = mongoose.model('Item', ItemSchema);
