import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3 style={{ color: '#913d23' }}>Sign Up</h3>

            <label style={{ color: '#555' }}>Email address:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                style={{ backgroundColor: '#000', color: '#fff' }}
            />
            <label style={{ color: '#555' }}>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                style={{ backgroundColor: '#000', color: '#fff' }}
            />

            <button disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup

