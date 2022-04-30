import React from 'react';
import { useForm } from "react-hook-form";
const AddItems = () => {
    const { register, handleSubmit, } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='w-50 mx-auto'>
            <h1>Please add service </h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                
                <input className='mb-2' placeholder='Name'   {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Supply Name'  {...register("sname")} />
                <input className='mb-2' placeholder='Price'  type="number" {...register("price",)} />
                <input className='mb-2' placeholder='Quantity'  type="number" {...register("quantity",)} />
                <textarea className='mb-2' placeholder='Datail'  {...register("detail")} />
                <input className='mb-2' placeholder='Photo url'  {...register("picture")} />
                <input className='mb-2' placeholder=''  type="submit" />
            </form>




        </div>
    );
};

export default AddItems;