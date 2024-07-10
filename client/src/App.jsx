import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import PostUpdate from './pages/PostUpdate';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:id' element={<PostUpdate />} />
			</Routes>
		</>
	);
};

export default App;
