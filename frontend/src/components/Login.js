import { useState } from "react"
import { useCustomersContext } from '../hooks/useCustomersContext'
const LoginForm = () => {
    const { dispatch } = useCustomersContext()
    const [username, setUsername] = useState('')
    const [password, SetPassword] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const customer = { username, password }

        const response = await fetch('/api/Customers', {
            method: 'POST',
            body: JSON.stringify(customer),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setEmptyFields([])
            setError(null)
            setUsername('')
            SetPassword('')
            //console.log('new product added', json)
            dispatch({ type: 'CREATE_CUSTOMER', payload: json })
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3 style={{ color: "#913d23" }}>Sign Up</h3>

            <label style={{ color: '#555' }}> Username:</label>
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                style={{ backgroundColor: '#000', color: '#fff' }}
                className={emptyFields.includes('username') ? 'error' : ''}
            />

            <label style={{ color: '#555' }}>Password:</label>
            <input
                type="text"
                onChange={(e) => SetPassword(e.target.value)}
                value={password}
                style={{ backgroundColor: '#000', color: '#fff' }}
                className={emptyFields.includes('password') ? 'error' : ''}
            />

            <button>Register</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default LoginForm