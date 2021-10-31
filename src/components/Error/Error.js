// import React from 'react';

// const Error = () => {
//     return (
//         <div>
//             <h1>this is 404</h1>
//         </div>
//     );
// };

// export default Error;

import React from 'react';
import { Link } from 'react-router-dom';



const Error = () => {
    return (
        <div className='m-5'>
            <div>
                <img className='img-fluid w-75' src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg" alt="" />

            </div>
            <div>  <Link to='/home'><button type="button" class="btn btn-danger">Back to Home</button></Link></div>
        </div>
    );
};

export default Error;