import React, { FC, useState } from 'react'
import signInImg from '../../assets/man-and-woman-in-gadgets.svg'
import { Link } from 'react-router-dom'
import axios from 'axios';

const SignIn: FC = () => {
    const [acceptPolicy, setAcceptPolicy] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [authError, setAuthError] = useState<string | null>(null);

    const handleGoogleSignIn = async() => {
        if (!acceptPolicy) {
            setError('You must read and accept the Privacy Policy.')
            return
        }

        try {
            const response = await axios.post(
              `${import.meta.env.VITE_API_V1_URL}/auth/google/callback`,
            );
          
            if (response.data.redirectUrl) {
              window.location.href = response.data.redirectUrl;
            } else {
              const googleAuthUrl = `http://localhost:3000/api/v1/auth/google/callback`;
              console.log(googleAuthUrl);
              window.location.href = googleAuthUrl;
            }
          } catch (error: any) {
            if (error.response && error.response.status === 401) {
                setAuthError("You are not authorized. Please login again."); // Уведомление при 401 ошибке
            } else {
                setError("Ошибка при отправке запроса. Попробуйте снова.");
            }
        }
    }

    const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptPolicy(event.target.checked)
        if (error || authError) {
            setError(null);
            setAuthError(null); // Reset notification when checkbox is changed
        }
    }

    return (
        <div className="flex">
            {/* Image Block */}
            <div className="flex-1 flex justify-center">
                <img
                    src={signInImg}
                    alt="Illustration"
                    className="max-w-full h-auto"
                />
            </div>

            {/* Sign-In Block */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-16">
                <h1 className="text-4xl font-bold text-black mb-8">Sign in</h1>
                <button
                    onClick={handleGoogleSignIn}
                    className="bg-[#0092FC] hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg w-56 mb-6 transition duration-150 ease-in-out"
                >
                    Sign in with Google
                </button>

                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        id="acceptPolicy"
                        checked={acceptPolicy}
                        onChange={handleCheckBoxChange}
                        className="form-checkbox h-5 w-5 text-black mr-2"
                    />
                    <label htmlFor="acceptPolicy" className="text-black">
                        I accept the {' '}
                        <Link
                            to="/privacy-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Privacy Policy
                        </Link>
                    </label>
                </div>

                {error && (
                    <p className="text-red-600 text-sm mb-4">{error}</p>
                )}

                {authError && (
                    <p className="text-red-600 text-sm mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                        {authError}
                    </p> // Ошибка авторизации 401
                )}
            </div>
        </div>
    )
}

export default SignIn