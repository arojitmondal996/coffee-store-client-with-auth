import React from 'react';
import Swal from 'sweetalert2'
import Header from './Header';

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault()

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }

        console.log(newCoffee);

        // send data to the server 
        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <>
            <Header />
            <div className='bg-[#f4f3f0] p-24'>
                <h2 className='text-3xl font-extrabold'>Add a Coffee</h2>
                <form onSubmit={handleAddCoffee}>
                    {/* form name of quantity row */}
                    <div className='md:flex mb-8'>
                        <div className="form-control md:w-1/2">
                            <label className='label'>
                                <span className='label-text'>Coffee Name</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Coffee Name' name='name' className='input input-bordered w-full' />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className='label'>
                                <span className='label-text'>Available Quantity</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Available Quantity' name='quantity' className='input input-bordered w-full' />
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
                                <input type="text" placeholder='Supplier' name='supplier' className='input input-bordered w-full' />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className='label'>
                                <span className='label-text'>Taste</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Taste' name='taste' className='input input-bordered w-full' />
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
                                <input type="text" placeholder='Category' name='category' className='input input-bordered w-full' />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className='label'>
                                <span className='label-text'>Details</span>
                            </label>
                            <label className='input-group'>
                                <input type="text" placeholder='Details' name='details' className='input input-bordered w-full' />
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
                    <input type="submit" value="Add Coffee" className='btn btn-block' />
                </form>
            </div>
        </>
    );
};

export default AddCoffee;