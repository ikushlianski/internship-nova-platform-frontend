import { Route, Routes } from 'react-router-dom';
import './App.css';
import { PrivacyPolicy } from './app/PrivacyPolicy/PrivacyPolicy';
import { RoutesEnum } from './utils/RoutesEnum';
import { Menu } from './components/Menu/Menu';
import { Main } from './app/Main/Main';
import NotFound from './not-found';
import SignIn from './features/SignIn/SignIn';

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route index path={RoutesEnum.Main} element={<Main />} />
        <Route path={RoutesEnum.PrivacyPolicy} element={<PrivacyPolicy />} />
        <Route path={RoutesEnum.Login} element={<SignIn />} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
