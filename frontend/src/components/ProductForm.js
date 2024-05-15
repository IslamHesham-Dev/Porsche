import { useState } from "react"

const ProductForm = () => {
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [price, setPrice] = useState('')
    const [engine_type, setEngineType] = useState('')
    const [transmission, setTransmission] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const product = { model, year, price, engine_type, transmission }

        const response = await fetch('/api/Products', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setModel('')
            setYear('')
            setPrice('')
            setEngineType('')
            setTransmission('')
            setError(null)
            console.log('new product added', json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3 style={{ color: '#913d23' }}>Add a New Product</h3>

            <label style={{ color: '#555' }}>Product Model:</label>
            <input
                type="text"
                onChange={(e) => setModel(e.target.value)}
                value={model}
                style={{ backgroundColor: '#000', color: '#fff' }}
            />


            <label style={{ color: '#555' }}>Product Year:</label>
            <input
                type="text"
                onChange={(e) => setYear(e.target.value)}
                value={year}
                style={{ backgroundColor: '#000', color: '#fff' }}
            />


            <label style={{ color: '#555' }}>Product Price:</label>
            <input
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                style={{ backgroundColor: '#000', color: '#fff' }}
            />


            <label style={{ color: '#555' }}>Product Engine Type:</label>
            <input
                type="text"
                onChange={(e) => setEngineType(e.target.value)}
                value={engine_type}
                style={{ backgroundColor: '#000', color: '#fff' }}
            />


            <label style={{ color: '#555' }}>Product Transmission:</label>
            <input
                type="text"
                onChange={(e) => setTransmission(e.target.value)}
                value={transmission}
                style={{ backgroundColor: '#000', color: '#fff' }}
            />

            <button>Add Product</button>
            {error && <div className="error">{error}</div>}
        </form >
    )
}

export default ProductForm