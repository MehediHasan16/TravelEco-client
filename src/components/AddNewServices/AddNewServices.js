// import React from 'react';

// const AddNewServices = () => {
//     return (
//         <div>
//             <h1>add new service</h1>
//         </div>
//     );
// };

// export default AddNewServices;

import React from 'react';
import { useForm } from "react-hook-form";
import "./AddNewServices.css";
const AddNewServices = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch(`https://dark-treat-67617.herokuapp.com/addServices`, {
            method: "Post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('added successfully');
                    reset();
                }

            })
    };
    return (
        <div className='service-style'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='m-5'>please add a New  services </h1>
                <input {...register("title")} placeholder='title' />
                <textarea {...register("description")} placeholder='Description' />
                <input {...register("img")} placeholder='image url' />
                <input type='number' {...register("price")} placeholder='price' />





                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewServices;