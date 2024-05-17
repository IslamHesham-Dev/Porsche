import { useProductsContext } from '../hooks/useProductsContext'

const ProductDetails = ({ product }) => {
    const { dispatch } = useProductsContext()

    const handleClick = async () => {
        const response = await fetch('/api/Products/' + product._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_PRODUCT', payload: json })
        }
    }

    return (
        <div className="product-details">
            <h4>{product.model}</h4>
            <p><strong>Year: </strong>{product.year}</p>
            <p><strong>Price: </strong>{product.price}</p>
            <p><strong>Engine Type: </strong>{product.engine_type}</p>
            <p><strong>Transmission: </strong>{product.transmission}</p>
            <p><strong>VIN: </strong>{product.VIN}</p>
            <p><strong>Color: </strong>{product.color}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default ProductDetails