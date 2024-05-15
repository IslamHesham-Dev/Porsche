import { useEffect, useState } from 'react'

// components
import ProductDetails from '../components/ProductDetails'
import ProductForm from '../components/ProductForm'

const Home = () => {
    const [product, createProducts] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/Products')
            const json = await response.json()

            if (response.ok) {
                createProducts(json)
            }
        }

        fetchProducts()
    }, [])

    return (
        <div className="home">
            <div className="products">
                {product && product.map((product) => (
                    <ProductDetails key={product._id} product={product} />
                ))}
            </div>
            <ProductForm />
        </div >
    )
}

export default Home