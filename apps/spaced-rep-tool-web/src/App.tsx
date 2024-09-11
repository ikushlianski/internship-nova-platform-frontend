import { Route, Routes } from 'react-router-dom';
import './App.css';
import { PrivacyPolicy } from './app/PrivacyPolicy/PrivacyPolicy';
import { RoutesEnum } from './utils/RoutesEnum';
import { Main } from './app/Main/Main';
import NotFound from './not-found';
import SignIn from './features/SignIn/SignIn';
import { Header } from 'components/Header/Header';

function App() {
  return (
    <div>
      <Header />
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
