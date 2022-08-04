import React, { useEffect, useState } from 'react';
import Product from './Product';

const Allproducts = () => {


    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)

    return (
        <div className='grid grid-cols-3 gap-5 my-5'>
            {
                products.map(product => <Product
                    key={product.p_id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default Allproducts;