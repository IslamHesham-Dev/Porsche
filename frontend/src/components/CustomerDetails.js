import { useCustomersContext } from "../hooks/useCustomersContext"

const CustomerDetails = ({ customer }) => {
    const { dispatch } = useCustomersContext()

    /*const handleClick = async () => {
        const response = await fetch('/api/Customers/' + customer._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_CUSTOMER', payload: json })
        }
    }*/

    return (
        <div className="customer-details">
            <h4>{customer.username}</h4>
            <p><strong>Username: </strong>{customer.username}</p>
            <p><strong>Password </strong>{customer.password}</p>

        </div>
    )
}

export default CustomerDetails

//<span className="material-symbols-outlined" onClick={handleClick}>delete</span>
//<p><strong>Email: </strong>{customer.email}</p>
//<p><strong>Birth Date: </strong>{customer.birth_date}</p>
