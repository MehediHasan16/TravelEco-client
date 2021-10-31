import React from 'react';
import { useForm } from "react-hook-form";
import "./AddServices.css";
const AddServices = () => {
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
                <h1>please add services data</h1>
                <input {...register("title")} placeholder='title' />
                <textarea {...register("description")} placeholder='Description' />
                <input {...register("img")} placeholder='image url' />
                <input type='number' {...register("price")} placeholder='price' />





                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;