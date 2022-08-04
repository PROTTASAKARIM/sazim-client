import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const ProductDetails = () => {
    const { p_id } = useParams();
    const url = `http://localhost:5000/products/${p_id}`;
    const [product, setProduct] = useState([]);

    console.log(url)
    useEffect(() => {
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data);
            });
    }, [])

    console.log(product[0])


    return (
        <div>
            <div class="card w-1/2 bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <h2 class="card-title mx-auto">Product Title: {product[0].p_title}</h2>
                    <p className='text-left'>Categories: {product[0].p_categories}</p>
                    <p className='text-left'>Description: {product[0].p_description}</p>
                    <p className='text-left'>Price:{product[0].p_price}</p>
                    <p className='text-left'>Rent:{product[0].p_rent} {product[0].p_rentoption}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;