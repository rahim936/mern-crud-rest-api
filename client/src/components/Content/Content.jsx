import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './Content.css';

const Content = ({ posts, onDeleteAction }) => {
	return (
		<section className='section'>
			{posts.map((post) => (
				<Card
					key={post._id}
					id={post._id}
					title={post.Title}
					content={post.Content}
					date={new Date(post.createdAt)}
					onDeleteAction={onDeleteAction}
				/>
			))}
		</section>
	);
};

Content.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			Title: PropTypes.string.isRequired,
			Content: PropTypes.string.isRequired,
			createdAt: PropTypes.string.isRequired, 
		})
	).isRequired,
	onDeleteAction: PropTypes.func.isRequired,
};

export default Content;
