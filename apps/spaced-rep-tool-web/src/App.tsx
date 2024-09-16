import { Route, Routes } from 'react-router-dom';
import './App.css';
import { PrivacyPolicy } from './app/PrivacyPolicy/PrivacyPolicy';
import { RoutesEnum } from './utils/RoutesEnum';
import { Main } from './app/Main/Main';
import { SignIn } from './features/SignIn/SignIn';

function App() {
  return (
    <div>
      <Routes>
        <Route index path={RoutesEnum.Main} element={<Main />} />
        <Route path={RoutesEnum.PrivacyPolicy} element={<PrivacyPolicy />} />
        <Route path={RoutesEnum.Login} element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
