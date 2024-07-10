import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../components/Input/Input';

const PostUpdate = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const res = await axios.get(
					`http://127.0.0.1:5000/api/v0/posts/${id}`
				);
				setTitle(res.data.Title);
				setContent(res.data.Content);
			} catch (error) {
				console.error('Error fetching post:', error);
			}
		};
		fetchPost();
	}, [id]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios.put(`http://127.0.0.1:5000/api/v0/posts/${id}`, {
				title,
				content,
			});
			navigate('/');
		} catch (error) {
			console.error('Error updating post:', error.stack);
		}
	};

	return (
		<div className='container'>
			<h2>Edit Post</h2>
			<form onSubmit={handleSubmit} className='edit-form'>
				<div className='input-box'>
					<Input
						type='text'
						name='title'
						id='title'
						placeholder='Post title'
						value={title}
						setValue={(value) => setTitle(value)}
					/>
				</div>
				<div className='input-box'>
					<textarea
						name='content'
						id='content'
						cols='150'
						rows='10'
						onChange={(e) => setContent(e.target.value)}
					>
						{content}
					</textarea>
				</div>
				<div className='input-box'>
					<input type='submit' value='Update Post' className='input-btn'/>
				</div>
			</form>
		</div>
	);
};

export default PostUpdate;
