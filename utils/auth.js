const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Password utilities
const hashPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);
};

const comparePassword = async (candidatePassword, hashedPassword) => {
	return await bcrypt.compare(candidatePassword, hashedPassword);
};

// JWT utilities
const generateToken = (payload) => {
	return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "24h" });
};

const verifyToken = (token) => {
	try {
		return jwt.verify(token, process.env.JWT_SECRET);
	} catch (error) {
		throw new Error("Invalid token");
	}
};

module.exports = {
	hashPassword,
	comparePassword,
	generateToken,
	verifyToken,
};
