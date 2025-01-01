const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		rooms: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Room",
				required: true,
			},
		],
	},
	{
		timestamps: true,
	}
);

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
