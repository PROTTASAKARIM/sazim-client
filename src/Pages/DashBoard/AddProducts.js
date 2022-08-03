import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const AddProducts = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const today = new Date();

    const onSubmit = data => {

        const newdata = { ...data, p_user: user.email }
        console.log(newdata)
        const url = `http://localhost:5000/products`;
        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newdata)
        })
            .then(res => res.json())
            .then(result => console.log(result))

    }
    return (
        <div>
            <div class="card w-1/2 mx-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Add Products</h2>
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
                                <option value="FURNITURE">Hourly</option>
                            </select>
                        </div>
                        <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProducts;