import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyproductDetails from './MyproductDetails';


const GET_PRODUCTS = gql`
query{
        
            p_id
        
    }

`


const MyProducts = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const p_user = user?.email;
    // http://localhost:5000/products/myproducts?p_user=new@user.com
    // const uri = `http://localhost:5000/products/myproducts?p_user=${p_user}`;
    const uri = `http://localhost:5000/products`;
    console.log(uri)
    useEffect(() => {
        fetch(uri, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data);
            });
    }, [])

    console.log(products)

    return (
        <div className='grid grid-cols-3 gap-2'>
            {
                products.map(product => <MyproductDetails
                    key={product.p_id}
                    product={product}
                ></MyproductDetails>)
            }
        </div>
    );
};

export default MyProducts;