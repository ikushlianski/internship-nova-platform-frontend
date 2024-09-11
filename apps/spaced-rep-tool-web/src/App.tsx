import './App.css'
import { RoutesEnum } from './utils/RoutesEnum'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpPage from './features/SignUp/SignUpPage'

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
