import PropTypes from 'prop-types';
import { useState } from 'react';
import Input from '../Input/Input';
import './Form.css';

const Form = ({ setFormData }) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		setFormData({ title: title, content: content });

		setTitle('');
		setContent('');
	};

	return (
		<form onSubmit={handleSubmit} className='post-form'>
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
				<Input
					type='text'
					name='content'
					id='content'
					placeholder='Post content'
					value={content}
					setValue={(value) => setContent(value)}
				/>
			</div>
			<div className='input-box'>
				<input type='submit' value='Post' className='input-btn'/>
			</div>
		</form>
	);
};

Form.propTypes = {
	setFormData: PropTypes.func,
};
export default Form;
