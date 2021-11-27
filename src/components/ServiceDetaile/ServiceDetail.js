import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
const ServiceDetail = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [singleService, setSingleService] = useState({})
    useEffect(() => {
        fetch(`https://dark-treat-67617.herokuapp.com/serviceDetail/${serviceId}`)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, []);
    const { title, price, description, img } = singleService;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data);
        data.title = title;
        data.price = price;
        data.description = description;
        data.img = img;
        data.name = user.displayName;
        data.email = user.email;
        data.state = 'padding';


        console.log(data);
        fetch(`https://dark-treat-67617.herokuapp.com/addBooking`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    alert('Booking successfully');

                }

            })


    }

    return (
        <div>
            <h1>This  is Service detaile \update{singleService.title}</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 m-5">
                <div className='col-6'>

                    <div className="card h-100">
                        <img src={singleService.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{singleService.title}</h5>
                            <p className="card-text">{singleService.description}</p>
                        </div>

                    </div>

                </div>


                <div className='col-6 service-style'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user?.displayName} {...register("userName")} placeholder='userName' />
                        <input defaultValue={user?.email} {...register("emailAddress")} placeholder='email' />
                        <input defaultValue={singleService?.title} {...register("titleInfo")} placeholder='title' />
                        <input type='text' {...register("address", { required: true })} placeholder='address' />
                        <input type='date' {...register("date", { required: true })} placeholder='date' />
                        <input defaultValue={singleService.price} type='number' {...register("priceInfo")} placeholder='price' />





                        <input className='btn btn-info' type="submit" />
                    </form>
                </div>


            </div>
        </div>
    );
};

export default ServiceDetail;