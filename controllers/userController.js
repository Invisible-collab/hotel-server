const User = require("../models/User");
const { comparePassword, generateToken } = require("../utils/auth");

// Create user
const createUser = async (req, res) => {
	const { name, email, password, phoneNumber } = req.body;

	const user = await User.create({
		name,
		email,
		password,
		phoneNumber,
	});

	// Generate token for the new user
	const token = generateToken({ userId: user._id });

	res.status(201).json({
		success: true,
		data: user.getPublicProfile(),
		token,
	});
};

// Login user
const loginUser = async (req, res) => {
	const { email, password } = req.body;

	// Get user with password
	const user = await User.findOne({ email }).select("+password");
	if (!user) {
		return res.status(401).json({
			success: false,
			message: "Invalid credentials",
		});
	}

	// Verify password
	const isPasswordValid = await comparePassword(password, user.password);
	if (!isPasswordValid) {
		return res.status(401).json({
			success: false,
			message: "Invalid credentials",
		});
	}

	// Generate token
	const token = generateToken({ userId: user._id });

	res.status(200).json({
		success: true,
		data: user.getPublicProfile(),
		token,
	});
};

module.exports = {
	createUser,
	loginUser,
};
