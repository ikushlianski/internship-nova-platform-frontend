import './App.css'
import { RoutesEnum } from './utils/RoutesEnum'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpPage from './features/SignUp/SignUpPage'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { PrivacyPolicy } from './app/PrivacyPolicy/PrivacyPolicy';
import { RoutesEnum } from './utils/RoutesEnum';
import { Main } from './app/Main/Main';
import NotFound from './not-found';
import SignIn from './features/SignIn/SignIn';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.SIGNUP} element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
