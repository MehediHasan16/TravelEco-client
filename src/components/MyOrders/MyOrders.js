import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const email = user?.email;
    const [booking, setBooking] = useState([])
    const [isCancel, setIsCancel] = useState(null)


    useEffect(() => {
        fetch(`https://dark-treat-67617.herokuapp.com/mybooking`)
            .then(res => res.json())
            .then(data => setBooking(data));


    }, [isCancel]);
    const handleCancelBooking = (id) => {
        console.log('delete', id);
        fetch(`https://dark-treat-67617.herokuapp.com/cancelBooking/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },

        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount) {
                    setIsCancel(true)
                    alert('Are You Cancel The Booking!!!')
                }
                else {
                    setIsCancel(false);
                }
                // const remainingBooking = booking.filter(pd => pd._id !== id)
                // setBooking(remainingBooking);
            })
    }
    const mybooking = booking.filter(order => order.email === user?.email)


    return (
        <div>
            <h1>My</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {


                    mybooking.map((order, index) => (
                        <div key={order._id} className="col">
                            <div className="card h-100">
                                <img src={order.img} className="card-img-top" alt="..." />
                                <p className='fw-bold text-start m-3'>${order.price}</p>
                                <div className="card-body">
                                    <h5 className="card-title">{order.title}</h5>
                                    <p className="card-text ">{order.description}</p>
                                    <p>Your Information: {order.name},{order.address},{order.emailAddress}</p>

                                    <button className='btn btn-info me-5  '  >{order.state}</button>
                                    <button className='btn btn-info btn btn-danger' onClick={() => handleCancelBooking(order._id)}  >Cancel Booking</button>
                                </div>
                            </div>
                        </div>

                    ))


                }
            </div>
        </div>
    );
};

export default MyOrders;