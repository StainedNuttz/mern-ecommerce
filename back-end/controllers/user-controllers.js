const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

const HttpError = require('../models/http-error')
const User = require('../models/user')

const signup = async (req, res, next) => {
	const error = validationResult(req)
	if (!error.isEmpty()) {
		return next(new HttpError(422, 'Bad signup data'))
	}

	const { username, email, password } = req.body

	let foundUser
	try {
		foundUser = await User.findOne({ email: email }).exec()
	} catch (err) {
		return next(new HttpError(500, err))
	}

	if (foundUser) {
		return next(new HttpError(422, 'Email address is already in use'))
	}

	let hashedPassword
	try {
		hashedPassword = await bcrypt.hash(password, 12)
	} catch (err) {
		return next(new HttpError(500, 'Signing up failed, try again later'))
	}

	const newUser = new User({
		username: username || 'test',
		email,
		password: hashedPassword,
	})

	try {
		await newUser.save()
	} catch (err) {
		return next(new HttpError(500, err))
	}

	let token
	try {
		token = jwt.sign(
			{
				userID: newUser.id,
				isAdmin: false,
			},
			process.env.JWT_SECRET,
			{ expiresIn: '1h' }
		)
	} catch (err) {
		console.log(err)
		console.log(process.env.JWT_SECRET)
		return next(new HttpError(500, 'Signing up failed, try again later'))
	}

	res.status(201).json({
		message: 'Successfully signed up',
		user: { userID: newUser.id, token: token },
	})
}

const login = async (req, res, next) => {
	const error = validationResult(req)
	console.log(error)
	if (!error.isEmpty()) {
		console.log(typeof req.body.password)
		return next(new HttpError(422, 'Bad login data'))
	}

	const { email, password } = req.body

	let foundUser
	try {
		foundUser = await User.findOne({ email: email }).exec()
	} catch (err) {
		return next(new HttpError(500, err))
	}

	if (!foundUser) {
		return next(new HttpError(404, 'User not found'))
	}

	let passwordValid
	try {
		passwordValid = await bcrypt.compare(password, foundUser.password)
	} catch (err) {
		return next(new HttpError(500, 'Failed to login, try again later'))
	}

	if (!passwordValid) {
		return next(new HttpError(401, 'Credentials are incorrect'))
	}

	let token
	try {
		token = jwt.sign(
			{
				userID: foundUser.id,
				isAdmin: foundUser.isAdmin,
			},
			process.env.JWT_SECRET,
			{ expiresIn: '1h' }
		)
	} catch (err) {
		return next(new HttpError(500, 'Logging in failed, try again later'))
	}

	res.json({
		message: 'Login successful',
		user: {
			id: foundUser.id,
			username: foundUser.username,
			isAdmin: foundUser.isAdmin,
			token: token,
		},
	})
}

exports.login = login
exports.signup = signup
