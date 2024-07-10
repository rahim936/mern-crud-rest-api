import Content from '../components/Content/Content';
import Form from '../components/Form/Form';

import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
	const [posts, setPosts] = useState([]);

	// Function to fetch posts
	const fetchPosts = () => {
		axios
			.get('http://127.0.0.1:5000/api/v0/posts')
			.then((res) => {
				setPosts(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		fetchPosts();
	}, [posts]);

	const FormData = (data) => {
		axios
			.post('http://127.0.0.1:5000/api/v0/posts', data)
			.then((res) => {
                setPosts((prevPosts) => [...prevPosts, res.data]);
                
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleDelete = (id) => {
		axios
			.delete(`http://127.0.0.1:5000/api/v0/posts/${id}`)
			.then(() => {
				setPosts((prevPosts) =>
					prevPosts.filter((post) => post._id !== id)
				);
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className='container'>
			<div className='post_form'>
				<h1>Post</h1>
				<Form setFormData={FormData} />
			</div>
			{posts.length > 0 ? (
				<Content posts={posts} onDeleteAction={handleDelete} />
			) : (
				<p>No Post Available</p>
			)}
		</div>
	);
};
export default Home;
