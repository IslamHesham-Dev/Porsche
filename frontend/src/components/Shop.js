import { useEffect } from 'react'
import { useProductsContext } from '../hooks/useProductsContext'
import ProductDetails2 from '../components/ProductDetails2'

const Shop = () => {
    const { products, dispatch } = useProductsContext()

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/Products')
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_PRODUCTS', payload: json })
            }
        }

        fetchProducts()
    },)

    return (
        <div className="shop">
            <div className="products">
                {products && products.map((product) => (
                    <ProductDetails2 key={product._id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Shop
