import { Router } from 'express';

import {
	createPost,
	deletePost,
	editPost,
	getAllPosts,
	getPost,
} from '../controllers/post.controllers.js';
import validatePostModelFields from '../middlewares/validatePostModelFields.js';

const router = Router();

router.route('/').post(validatePostModelFields, createPost).get(getAllPosts);

router
	.route('/:id')
	.get(getPost)
	.get(getAllPosts)
	.put(editPost)
	.delete(deletePost);

export default router;
