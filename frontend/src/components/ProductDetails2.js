

const ProductDetails2 = ({ product }) => {
    return (
        <div className="product-details">
            <h4>{product.model}</h4>
            <p><strong>Year: </strong>{product.year}</p>
            <p><strong>Price: </strong>{product.price}</p>
            <p><strong>Engine Type: </strong>{product.engine_type}</p>
            <p><strong>Transmission: </strong>{product.transmission}</p>
            <p><strong>VIN: </strong>{product.VIN}</p>
            <p><strong>Color: </strong>{product.color}</p>
            <span>Buy</span>
        </div>
    )
}

export default ProductDetails2

//"material-symbols-outlined"