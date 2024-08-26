import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { PrivacyPolicy } from './app/PrivacyPolicy/PrivacyPolicy';
import { RoutesEnum } from './utils/RoutesEnum';

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path={RoutesEnum.Main}>
					<Route index element={<Navigate to={RoutesEnum.PrivacyPolicy} />} />
					<Route path={RoutesEnum.PrivacyPolicy} element={<PrivacyPolicy />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
