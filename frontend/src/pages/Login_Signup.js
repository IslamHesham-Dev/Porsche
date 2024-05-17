import { useEffect } from 'react'
import { useCustomersContext } from '../hooks/useCustomersContext'

// components
import Login from '../components/Login'
import CustomerDetails from '../components/CustomerDetails'


const Login_Signup = () => {
    const { customers, dispatch } = useCustomersContext()

    useEffect(() => {
        const fetchCustomers = async () => {
            const response = await fetch('/api/Customers')
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_CUSTOMERS', payload: json })
            }
        }

        fetchCustomers()
    },)

    return (
        <div className="home">
            <div className="products">
                {customers && customers.map((customer) => (
                    <CustomerDetails key={customer._id} customer={customer} />
                ))}
            </div>
            <LoginForm />
        </div >
    )
}

export default Login_Signup