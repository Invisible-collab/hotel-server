const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
	{
		roomNumber: {
			type: Number,
			required: [true, "Room number is required"],
			unique: true,
		},
		price: {
			type: Number,
			required: [true, "Price is required"],
			min: [0, "Price cannot be negative"],
		},
		available: {
			type: Boolean,
			default: true,
		},
		categoryId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Category",
			required: true,
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

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;
