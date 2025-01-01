const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Category name is required"],
			unique: true,
			trim: true,
		},
		description: {
			type: String,
			trim: true,
		},
		rooms: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Room",
			},
		],
		layouts: [
			{
				type: String,
				trim: true,
			},
		],
		amenities: [
			{
				type: String,
				trim: true,
			},
		],
		supplies: [
			{
				type: String,
				trim: true,
			},
		],
	},
	{
		timestamps: true,
	}
);

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
