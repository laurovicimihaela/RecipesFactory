const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 5,
		maxlength: 15
	},
	name: {
		type: String,
		required: true,
		trim: true
	},
	age: {
		type: Number,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	isBlogger: {
		type: Boolean,
		required: true
	}

},
	{
	timestamps: true,

	});

const User = mongoose.model('User', userSchema);

module.exports = User;
	