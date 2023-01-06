import React, { useRef } from 'react';

const AddProduct = () => {
    const nameRef = useRef()
    const priceRef = useRef()
    const quantityRef = useRef()

    const handleSubmit = (e) => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const addProduct = { name, price, quantity };

        fetch('http://localhost:5000/product/add', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addProduct)
        }).then((res) => res.json())
            .then(data => {
                // console.log(data);
                if (data) {
                    alert('Product added successfully!')
                    e.target.reset()
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Add a Product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} placeholder='Product Name' />
                <input type="number" ref={priceRef} name="" id="" placeholder='Price' />
                <input type="number" ref={quantityRef} name="" id="" placeholder='Quectity' />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;