import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const ProductDetails = () => {
    const { p_id } = useParams();
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
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
    }, [p_id])

    const onSubmit = data => {

        const newdata = { ...data, p_user: user.email }
        const url = `http://localhost:5000/products/${p_id}`;
        fetch(url, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newdata)
        })
            .then(res => res.json())
            .then(result => console.log(result))

    }

    return (
        <div>
            <div class="card w-1/2 bg-base-100 shadow-xl mx-auto my-5">
                <div class="card-body">
                    <h2 class="card-title mx-auto">Product Title: {product[0]?.p_title}</h2>
                    <p className='text-left'>Categories: {product[0]?.p_categories}</p>
                    <p className='text-left'>Description: {product[0]?.p_description}</p>
                    <p className='text-left'>Price:{product[0]?.p_price}</p>
                    <p className='text-left'>Rent:{product[0]?.p_rent} {product[0]?.p_rentoption}</p>
                </div>


            </div>
            <div class="card w-1/2 mx-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Edit Products</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-semibold">Product Title</span>
                            </label>
                            <input type="text"
                                placeholder="Product Title"
                                className="input input-bordered w-full max-w-lg" required {...register("p_title")} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Categories</span>
                            </label>
                            <select type="text"
                                placeholder="Your Category"
                                className="input input-bordered w-full max-w-lg" required {...register("p_categories")}>
                                <option value="ELECTRONICS">ELECTRONICS</option>
                                <option value="FURNITURE">FURNITURE</option>
                                <option value="HOME APPLIANCES">HOME APPLIANCES</option>
                                <option value="SPORTING GOODS">SPORTING GOODS</option>
                                <option value="OUTDOOR">OUTDOOR</option>
                                <option value="TOYS">TOYS</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-semibold">Product Description</span>
                            </label>
                            <textarea type="text"
                                placeholder="Product Description"
                                className="input input-bordered w-full max-w-lg" required {...register("p_description")} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-semibold" >Product Price</span>
                            </label>
                            <input type="number"
                                placeholder="Product Price"
                                className="input input-bordered w-full max-w-lg" required {...register("p_price")} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-semibold">Product Rent</span>
                            </label>
                            <input type="number"
                                placeholder="Product Rent"
                                className="input input-bordered w-full max-w-lg" required {...register("p_rent")} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Rent option</span>
                            </label>
                            <select type="text"
                                placeholder="Rent option"
                                className="input input-bordered w-full max-w-lg" required {...register("p_rentoption")}>
                                <option value="Daily">Daily</option>
                                <option value="Hourly">Hourly</option>
                            </select>
                        </div>
                        <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;