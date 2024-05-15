const ProductDetails = ({ product }) => {
    return (
        <div className="product-details">
            <h4>{product.model}</h4>
            <p><strong>Year: </strong>{product.year}</p>
            <p><strong>Price: </strong>{product.price}</p>
            <p><strong>Engine Type: </strong>{product.engine_type}</p>
            <p><strong>Transmission: </strong>{product.transmission}</p>
        </div>
    )
}

export default ProductDetails