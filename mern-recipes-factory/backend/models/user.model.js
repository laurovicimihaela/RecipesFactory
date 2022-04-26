const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

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
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
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

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};
const validate = (data) => {
	const schema = Joi.object({
		username: Joi.string().required().label("FUsername"),
		name: Joi.string().required().label("Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		isBlogger: Joi.boolean().required().label("Blogger"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };
	