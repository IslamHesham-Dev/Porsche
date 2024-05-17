import { CustomersContext } from '../context/CustomersContext';
import { useContext } from 'react'

export const useCustomersContext = () => {
    const context = useContext(CustomersContext)

    if (!context) {
        throw Error('useCustomersContext must be used inside an CustomersContextProvider')
    }

    return context
}