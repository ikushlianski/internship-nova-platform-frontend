import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import { PrivacyPolicy } from './app/PrivacyPolicy/PrivacyPolicy';

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route index element={<Navigate to='/privacy-policy' />} />
				<Route path='/privacy-policy/' element={<PrivacyPolicy />} />
			</Routes>
		</div>
	);
}

export default App;
