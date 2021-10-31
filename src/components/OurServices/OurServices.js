import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const OurServices = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://dark-treat-67617.herokuapp.com/ourServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    // const handleAddToOrder = (index) => {
    //     const data = services[index];


    //     fetch('http://localhost:5000/addBooking', {
    //         method: "POST",
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => console.log(result))

    return (
        <div className='m-5'>
            <h1 className='m-3'>Booking and Enjoy!</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {


                    services.map((service, index) => (
                        <div className="col">
                            <div className="card h-100">
                                <img src={service.img} className="card-img-top" alt="..." />
                                <Link to={`/serviceDetail/${service._id}`}> <button className='btn btn-info'  >Booking Now</button></Link>
                                <div className="card-body">
                                    <h5 className="card-title">{service.title}</h5>
                                    <p className="card-text">{service.description}</p>
                                    <p className='fw-bold text-start border border-warning mt-3'>${service.price}</p>
                                </div>
                            </div>
                        </div>

                    ))


                }
            </div>
        </div>
    );
};

export default OurServices;