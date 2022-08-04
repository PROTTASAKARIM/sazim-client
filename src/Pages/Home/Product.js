import React from 'react';

const Product = ({ product }) => {
    const { p_id, p_title, p_categories, p_description, p_price, p_rentoption, p_rent } = product
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title mx-auto">Product Title: {p_title}</h2>
                    <p className='text-left'>Categories: {p_categories}</p>
                    <p className='text-left'>Description: {p_description}</p>
                    <p className='text-left'>Price:{p_price}</p>
                    <p className='text-left'>Rent:{p_rent} {p_rentoption}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;