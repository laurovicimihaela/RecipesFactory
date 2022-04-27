const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	requiredTime: {
		type: Number,
		required: true
	},
	numberOfPortions: {
		type: Number,
		required: true
	},
	difficulty: {
		type: String,
		required: true
    },
	ingredients: {
		type: String,
		required: true
    },
	description: {
		type: String,
		required: true
	},
	photo: {
		type: String,
		required: false,
	},
	categories: {
		type: Array,
		required: false,
	}
}, {
	timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;