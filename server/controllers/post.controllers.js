import PostModel from '../models/PostModel.js';

const createPost = async (req, res) => {
	try {
		const { title, content } = req.body;
		const post = await PostModel.create({ Title: title, Content: content });
		return res.status(201).json(post);
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
};

const getAllPosts = async (req, res) => {
	try {
		const posts = await PostModel.find().sort({ 'createdAt': -1});
		if (!posts) {
			return res.status(404).json('No Post Found');
		}
		return res.status(200).json(posts);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};

const getPost = async (req, res) => {
	try {
		const postID = req.params.id;
		const post = await PostModel.findById(postID);
		if (!post) {
			return res.status(404).json('Post Not Found');
		}
		return res.status(200).json(post);
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};

const editPost = async (req, res) => {
	try {
		const postID = req.params.id;
		const { title, content } = req.body;
		const post = await PostModel.findByIdAndUpdate(postID, {
			Title: title,
			Content: content,
		});
		if (!post) {
			return res.status(404).json(`No post found with ID: ${postID}`);
		}
		return res.status(200).json('Post Updated');
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
};

const deletePost = async (req, res) => {
	try {
		const postID = req.params.id;
		await PostModel.findByIdAndDelete(postID);
		return res.status(200).json('deletePost');
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
};

export { createPost, deletePost, editPost, getAllPosts, getPost };
