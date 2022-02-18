import React from 'react';
import { useForm } from 'react-hook-form';


const Makeadmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('https://safe-cliffs-35352.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount) {
                    alert('Database Input Admin Role SuccessFully')
                    window.location.reload();
                }
                else {
                    alert('Sorry Users not Listed In Database')
                    window.location.reload();
                }
            })

    }



    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div
                    className="  my-5 p-5 "
                    style={{
                        boxShadow: "10px 10px 8px 10px #888888",
                        borderRadius: "5px",
                    }}
                >
                    <h1 className="text-center py-4 fs-4">Make Admin Page</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            style={{
                                backgroundColor: "#e7e7e7",
                                border: "none",
                                borderRadius: "4px",
                            }}
                            className="w-100 my-2 p-2"
                            Placeholder="Admin Email"
                            type="email"
                            {...register("email")}
                        />
                        <br />


                        <br />
                        <input className="w-50 my-2 p-2 btn btn-warning   bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-3 py-2 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-green-800   " type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Makeadmin;