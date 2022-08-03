import React from 'react';

const Product = ({ product }) => {
    const { p_id, p_name, p_catagory, p_description, p_price } = product
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{p_name}</h2>
                    <p>{p_description}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;