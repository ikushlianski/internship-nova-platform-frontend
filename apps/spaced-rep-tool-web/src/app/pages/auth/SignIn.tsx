import React, { FC, useState } from 'react'


const SignIn: FC = () => {
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


    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
                <h1 className='text-2xl fonts-semibold text-center mb-6'>Sign in</h1>
                <button
                    onClick={handleGoogleSignIn}
                    className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full mb-4'
                >
                    Sign in with Google
                </button>

                <div className='flex items-center mb-4'>
                    <input 
                        type="checkbox" 
                        id='acceptPolicy'
                        checked={acceptPolicy}
                        onChange={handleCheckBoxChange}
                        className='mr-2'
                    />
                    <label htmlFor='acceptPolicy' className='text-gray-700'>
                        I accept the{''}
                        <a
                            href='/privacy-policy'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue-500 hover:underline'
                        >
                            Privacy Policy
                        </a>
                    </label>
                </div>

                {error && <p className='text-red-50 text-sm'>{error}</p>}
            </div>
        </div>
    )
}

export default SignIn