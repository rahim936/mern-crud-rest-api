import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ type, name, id, placeholder, value, setValue }) => {
	return (
		<>
			<input
				className='input'
				type={type}
				name={name}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</>
	);
};

Input.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	setValue: PropTypes.func.isRequired,
};

export default Input;
