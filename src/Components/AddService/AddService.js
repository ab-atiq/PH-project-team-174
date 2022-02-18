import React from 'react';
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('https://safe-cliffs-35352.herokuapp.com/addService', {
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
                <input className='w-75 mt-3 p-2 rounded border-0' type='text' placeholder=' Product Name' defaultValue="" {...register("productName")} />

                <input className='w-75 mt-3 p-2 rounded border-0 ' type='text' placeholder=' Image Link' defaultValue="" {...register("image")} />

                <input className='w-75 mt-3 p-2 rounded border-0' type='number' min="1"
                    max="5" placeholder='Rating Number (Mx- 5)' {...register("rating", { required: true })} />
                <input className='w-75 mt-3 p-2 rounded border-0' type='number' placeholder='$$ Price ' defaultValue="" {...register("price")} />


                <input className='w-75 btn btn-success    rounded border-0 mt-3 p-2         text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-3 py-2 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-green-800' variant='primary' type="submit" />
                {errors.exampleRequired && <span>This field is required</span>}
            </form>
        </>
    );
};

export default AddService;