import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { p_id, p_title, p_categories, p_description, p_price, p_rentoption, p_rent } = product;
    const navigate = useNavigate();

    const navigateToBuy = (p_id) => {
        navigate(`/ordered/${p_id}`)
    }
    const navigateToRent = (p_id) => {
        navigate(`/rent/${p_id}`)
    }

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
                        <button onClick={() => { navigateToBuy(p_id) }} class="btn btn-primary">Buy Now</button>
                        <button onClick={() => { navigateToRent(p_id) }} class="btn btn-primary">Rent Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;