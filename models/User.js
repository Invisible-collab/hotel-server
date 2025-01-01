const mongoose = require("mongoose");
const { hashPassword } = require("../utils/auth");

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
			trim: true,
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
			trim: true,
			lowercase: true,
			match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"],
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			select: false,
		},
		phoneNumber: {
			type: String,
			required: [true, "Phone number is required"],
			trim: true,
		},
		bookings: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Booking",
			},
		],
	},
	{
		timestamps: true,
	}
);

// Hash password before saving using the utility function
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();
	this.password = await hashPassword(this.password);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
