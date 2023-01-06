import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        const uri = `http://localhost:5000/products/${id}`
        fetch(uri).then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handleNameChange = (e) => {
        const updateName = e.target.value;
        const updateProduct = { name: updateName, price: product.price, quantity: product.quantity }
        setProduct(updateProduct)
    }
    const handlePriceChange = (e) => {
        const updatePrice = e.target.value;
        const updateProduct = { name: product.name, price: updatePrice, quantity: product.quantity }
        setProduct(updateProduct)
    }
    const handleQuantityChange = (e) => {
        const updateQuantity = e.target.value;
        const updateProduct = { name: product.name, price: product.price, quantity: updateQuantity }
        setProduct(updateProduct)
    }
    const handleSubmit = (e) => {
        const proceed = window.confirm('Are you sure? want to make Update?');
        if (proceed) {
            const uri = `http://localhost:5000/products/update/${id}`
            fetch(uri, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            }).then(res => res.json())
                .then(data => {
                    if (data > 0) {
                        alert('Product Updated Successfully');
                        setProduct({})
                    }
                })
        }
        e.preventDefault();
    }

    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={product.name || ''} onChange={handleNameChange} placeholder='Product Name' />
                <input type="number" value={product.price || ''} onChange={handlePriceChange} name="" id="" placeholder='Price' />
                <input type="number" value={product.quantity || ''} onChange={handleQuantityChange} name="" id="" placeholder='Quectity' />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateProduct;