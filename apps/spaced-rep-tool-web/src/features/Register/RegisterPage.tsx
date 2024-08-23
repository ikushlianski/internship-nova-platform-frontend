import { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import PagePhoto from '../../assets/man-and-woman-in-gadgets.svg'

const RegisterPage = () => {
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const handleGoogleSuccess = async (response: any) => {
    try {
      const token = response.credential

      // privacy policy validation
      if (!privacyAccepted) {
        setError('Пожалуйста, примите политику конфиденциальности.')
        return
      }

      // send data to backend
      const res = await axios.post(
        'http://localhost:3000/auth/google/callback',
        {
          privacyAccepted,
          token,
        }
      )

      if (res.status === 200) {
        setSuccess('Вы успешно зарегистрировались через Google!')
        setPrivacyAccepted(false)
      }
    } catch (err) {
      setError(
        'Ошибка при регистрации через Google. Пожалуйста, попробуйте снова.'
      )
    }
  }

  const handleGoogleError = () => {
    setError('Не удалось выполнить авторизацию через Google. Попробуйте снова.')
  }

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      {/* //todo
      set up an actual creds to make things work! */}

      <div className="flex h-screen w-screen overflow-hidden">
        <div className="flex-1 flex items-center justify-center bg-gray-200">
          <img
            src={PagePhoto}
            alt="People with gadgets"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 flex items-center justify-center bg-white">
          <div className="w-full max-w-md p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl text-gray-900 text-center mb-4">
              Зарегистрируйтесь
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Зарегистрируйтесь, чтобы получить полный доступ к платформе
            </p>

            {error && (
              <div className="text-red-500 text-center mb-4">{error}</div>
            )}
            {success && (
              <div className="text-green-500 text-center mb-4">{success}</div>
            )}

            {/* todo : think about Toast libs, such as react-toast */}

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                className="mr-2"
              />
              <label>
                Я принимаю условия{' '}
                <NavLink
                  to="/privacy-policy"
                  className="text-gray-700 underline"
                >
                  Политики конфиденциальности
                </NavLink>
              </label>
            </div>

            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                useOneTap
              />
            </div>

            <p className="text-center mt-4">
              Уже есть аккаунт?{' '}
              <NavLink to="/login" className="underline">
                Войдите
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default RegisterPage
