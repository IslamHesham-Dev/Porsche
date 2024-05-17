import { createContext, useReducer } from 'react'

export const CustomersContext = createContext()

export const customerReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CUSTOMERS':
            return {
                customers: action.payload
            }
        case 'CREATE_CUSTOMER':
            return {
                customers: [action.payload, ...state.customers]
            }
        case 'DELETE_CUSTOMER':
            return {
                customers: state.customers.filter((c) => c._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const CustomersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(customerReducer, {
        customers: null
    })

    return (
        <CustomersContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CustomersContext.Provider>
    )
}