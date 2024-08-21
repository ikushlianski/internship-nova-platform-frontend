import React, { FC, useState } from 'react'
import styles from './SignIn.module.css'


const SignIn: FC = () => {
    const [acceptPolicy, setAcceptPolicy] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleGogleSignIn = () => {
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
        <div>
            <h1>Sign in</h1>
        </div>
    )
}

export default SignIn