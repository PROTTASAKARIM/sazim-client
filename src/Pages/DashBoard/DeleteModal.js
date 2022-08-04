import React from 'react';

const DeleteModal = ({ product, deleteing, setDeleteing }) => {
    const { p_id, p_title, p_categories, p_description, p_price, p_rentoption, p_rent } = product

    const handleDelete = (id) => {
        const url = `http://localhost:5000/products?p_id=${p_id}`;
        console.log(url)
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // const remaining = products.filter(product => product._id !== id);
                // setProducts(remaining);
            })

    }
    return (
        <div>
            <input type="checkbox" id="deleteConfirm" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete</h3>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(p_id)} class="btn btn-xs btn-error">Delete</button>
                        <label for="deleteConfirm" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;