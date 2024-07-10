import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
	{
		Title: {
			type: String,
			required: [true, 'Title is required'],
			lowercase: true,
			index: true,
		},
		Content: {
			type: String,
			required: [true, 'Content is required'],
		},
	},
	{
		timestamps: true,
    }
);

const PostModel = mongoose.model('Post', PostSchema)

export default PostModel;
