import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault()

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }

        console.log(updatedCoffee);

        // send data to the server 
        fetch(`https://coffee-store-server-sepia-iota.vercel.app/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className='bg-[#f4f3f0] p-24'>
            <h2 className='text-3xl font-extrabold'>Update Coffee</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name of quantity row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className='label'>
                            <span className='label-text'>Coffee Name: {name}</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Coffee Name' name='name' defaultValue={name} className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className='label'>
                            <span className='label-text'>Available Quantity</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Available Quantity' name='quantity' defaultValue={quantity} className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className='label'>
                            <span className='label-text'>Supplier Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Supplier' name='supplier' defaultValue={supplier} className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className='label'>
                            <span className='label-text'>Taste</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Taste' name='taste' defaultValue={taste} className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className='md:flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className='label'>
                            <span className='label-text'>Category</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Category' name='category' defaultValue={category} className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className='label'>
                            <span className='label-text'>Details</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Details' name='details' defaultValue={details} className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className='mb-8'>
                    <div className="form-control md:w-full">
                        <label className='label'>
                            <span className='label-text'>Photo url</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" placeholder='Photo url' name='photo' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Coffee" className='btn btn-block' />
            </form>
        </div>
    );
};

export default UpdateCoffee;