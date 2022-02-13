import React from 'react';
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Database Input SuccessFully')
                    window.location.reload();
                }
            })

    }

    // console.log(watch("example")); // watch input value by passing the name of it

    return (
        <>

            <form style={{ boxShadow: '10px 10px 8px 10px #888888', backgroundColor: '#c9c9c9' }} className='w-75 my-5 py-5  mx-auto rounded' onSubmit={handleSubmit(onSubmit)}>

                <input className='w-75 mt-3 p-2 rounded border-0 ' type='text' placeholder='Enter your Image Link' defaultValue="" {...register("image")} />
                <input className='w-75 mt-3 p-2 rounded border-0' type='text' placeholder='Enter Your Product Name' defaultValue="" {...register("productName")} />
                <input className='w-75 mt-3 p-2 rounded border-0' type='number' placeholder='Rating Number' {...register("rating", { required: true })} />
                <input className='w-75 mt-3 p-2 rounded border-0' type='number' placeholder='Send  your Price' defaultValue="" {...register("price")} />


                <input className='w-75  rounded border-0 mt-3 p-2' variant='primary' type="submit" />
                {errors.exampleRequired && <span>This field is required</span>}
            </form>
        </>
    );
};

export default AddService;