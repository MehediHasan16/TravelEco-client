// import React from 'react';

// const ManageAllOrders = () => {
//     return (
//         <div>
//             <h1>Manage all orders</h1>
//         </div>
//     );
// };

// export default ManageAllOrders;

import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [manageAllOrders, setManageAllOrders] = useState([])
    const [isApproved, setIsApproved] = useState(null);
    const [isCancel, setIsCancel] = useState(null)
    useEffect(() => {
        fetch(`https://dark-treat-67617.herokuapp.com/mybooking`)
            .then(res => res.json())
            .then(data => setManageAllOrders(data));
    }, [isApproved, isCancel])
    const handleApprovedBooking = id => {
        fetch(`https://dark-treat-67617.herokuapp.com/approved/${id}`, {
            method: "PUT",

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setIsApproved(true)
                    alert('Your Booking Approve')


                }
                else {
                    setIsApproved(false)
                }


            })

    }

    const handleCancelBooking = id => {
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


    return (
        <div>
            <h1 className='m-5'>Please Manage All Orders</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {


                    manageAllOrders.map((order, index) => (
                        <div key={order._id} className="col">
                            <div className="card h-100">
                                <img src={order.img} className="card-img-top" alt="..." />
                                <p className='fw-bold text-start m-3'>${order.price}</p>
                                <div className="card-body">
                                    <h5 className="card-title">{order.title}</h5>
                                    <p>Booking: {order.state}</p>
                                    <p className="card-text ">{order.description}</p>
                                    <p>Your Information: {order.name},{order.address},{order.emailAddress}</p>

                                    <button className=' me-5 btn btn-info btn btn-danger  ' onClick={() => handleCancelBooking(order._id)}  >Cancel Booking</button>
                                    <button className='btn btn-info' onClick={() => handleApprovedBooking(order._id)}  > Approved</button>
                                </div>
                            </div>
                        </div>

                    ))


                }
            </div>
        </div>
    );
};

export default ManageAllOrders;