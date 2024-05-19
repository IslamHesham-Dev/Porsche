import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3 style={{ color: '#913d23' }}>Log In</h3>

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

            <button>Log in</button>
        </form>
    )
}

export default Login