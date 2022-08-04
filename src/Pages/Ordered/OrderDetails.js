import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init'

const OrderDetails = () => {
    const { p_id } = useParams();
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const url = `http://localhost:5000/products/${p_id}`;
    const [product, setProduct] = useState([]);

    // console.log(url)
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

    // const placeOrder = (p_id) => {
    //     const data = { p_id: p_id }

    //     const url = `http://localhost:5000/order`;
    //     fetch(url, {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result)
    //             alert('Rent Successful')
    //         })

    // }

    const onSubmit = data => {
        const newdata = { ...data, p_id: p_id }
        // console.log(newdata)
        const url = `http://localhost:5000/order`;
        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newdata)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert('Order Successful')
            })

    }


    return (
        <div>
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
            </div>
            <div class="card w-1/2 bg-base-100 shadow-xl mx-auto my-5">
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-semibold">Order date</span>
                            </label>
                            <input type="date"
                                placeholder="Order Date"
                                className="input input-bordered w-full max-w-lg" required {...register("o_date")} />
                        </div>
                        <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Submit" />
                    </form>
                </div>


            </div>

        </div>
    );
};

export default OrderDetails;