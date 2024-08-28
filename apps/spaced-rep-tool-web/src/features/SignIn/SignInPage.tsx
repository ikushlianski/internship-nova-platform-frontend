import React, { FC, useEffect, useState } from 'react'
import signInImg from '../../assets/man-and-woman-in-gadgets.svg'


const SignInPage: FC = () => {
    const [acceptPolicy, setAcceptPolicy] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleGoogleSignIn = () => {
        if(!acceptPolicy) {
            setError('You must read and accept the Privacy Policy.')
            return
        }

        const host = process.env.REACT_APP_API_HOST
        const googleAuthUrl = `${host}/auth/google/callback`

        window.location.href = googleAuthUrl
    }

    const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptPolicy(event.target.checked)
        if(error) {
            setError(null)
        }
    }

    // Effect to handle the token after redirect from Google authentication
    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const token = params.get('token')

        // If a token is present, save it to cookies
        if(token) {
            setCookie('googleToken', token, 7) // Save the token in cookies for 7 days
        }
    }, [])

    // Function to set a cookie with a specified name, value, and expiration period
    const setCookie = (name: string, value: string, days: number) => {
        const expires = new Date(Date.now() + days * 845e5).toUTCString()
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`
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
                className="bg-green-200 hover:bg-green-300 text-black font-semibold py-3 px-6 rounded-lg w-full mb-6 transition duration-150 ease-in-out"
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
                    I accept the{' '}
                    <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Privacy Policy
                    </a>
                </label>
            </div>

            {error && (
                <p className="text-red-600 text-sm mb-4">{error}</p>
            )}
        </div>
    </div>
    )
}

export default SignInPage