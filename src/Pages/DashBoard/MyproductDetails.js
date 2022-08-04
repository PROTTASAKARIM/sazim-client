import React, { useState } from 'react';
import DeleteModal from './DeleteModal';
import { useNavigate } from 'react-router-dom';

const MyproductDetails = ({ product }) => {
    const { p_id, p_title, p_categories, p_description, p_price, p_rentoption, p_rent } = product
    const [openModal, setOpenModal] = useState(false);
    const [deleteing, setDeleteing] = useState(null);
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const handleConfirmDelete = () => {
        setOpenModal(true)
    }
    const navigateToDetails = (p_id) => {

        navigate(`/dashboard/myproducts/${p_id}`);
    }
    const performeToDelete = () => {
        const proceed = window.confirm();
        if (proceed) {
            const url = `http://localhost:5000/products?p_id=${p_id}`;
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product.p_id !== p_id);
                    setProducts(remaining);
                })
        }
        else {

        }
    }

    return (
        <div>
            <div>
                <div class="card w-80 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title mx-auto">Product Title: {p_title}</h2>
                        <p className='text-left'>Categories: {p_categories}</p>
                        <p className='text-left'>Description: {p_description}</p>
                        <p className='text-left'>Price:{p_price}</p>
                        <p className='text-left'>Rent:{p_rent} {p_rentoption}</p>
                        <div class="card-actions justify-end">
                            <button onClick={() => navigateToDetails(p_id)} class="btn btn-primary">Details</button>
                            <button onClick={() => performeToDelete(p_id)} class="btn btn-primary">Delete</button>
                            {/* <label onClick={() => { handleConfirmDelete() }} for="deleteConfirm" class="btn modal-button btn-danger">Delete</label> */}
                            {/* {
                                openModal && <DeleteModal
                                    key={p_id}
                                    product={product}
                                    deleteing={deleteing}
                                    setDeleteing={setDeleteing}
                                ></DeleteModal>
                            } */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyproductDetails;