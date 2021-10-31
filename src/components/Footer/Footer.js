// import React from 'react';

// const Footer = () => {
//     return (
//         <div>
//             <h1 >  TravelEco
//             </h1>
//         </div>
//     );
// };

// export default Footer;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitterSquare, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow, faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

const Footer = () => {
    const element1 = <FontAwesomeIcon icon={faLocationArrow} />
    const element2 = <FontAwesomeIcon icon={faPhoneSquare} />

    const element4 = <FontAwesomeIcon icon={faEnvelope} />
    const element5 = <FontAwesomeIcon icon={faFacebook} />
    const element6 = <FontAwesomeIcon icon={faTwitterSquare} />
    const element7 = <FontAwesomeIcon icon={faGithub} />
    const element8 = <FontAwesomeIcon icon={faLinkedin} />
    return (
        <div>
            <div className='d-lg-flex justify-content-lg-around p-3 mb-2 p-3 mb-2 bg-info text-white ' >

                <div className=' m-5 p-5' >
                    <div>
                        <div className='d-lg-flex justify-content-lg-center align-content-lg-center  '>
                            <div >
                                <p className='icon-style2'>{element1}</p>
                            </div>
                            <div>
                                <p className='mt-4 mx-2'>21 Revolution Streel</p>
                            </div>
                        </div>
                        <div className='d-lg-flex justify-content-lg-center align-content-lg-center  '>
                            <div >
                                <p className='icon-style2'>{element2}</p>
                            </div>
                            <div>
                                <p className='mt-4 mx-4'> +1 299 221213</p>
                            </div>
                        </div>
                        <div className='d-lg-flex justify-content-lg-center align-content-lg-center  '>
                            <div >
                                <p className='icon-style2'>{element4}</p>
                            </div>
                            <div>
                                <p className='mt-4 mx-2'>maher@gmail.com</p>
                            </div>
                        </div>


                    </div>
                </div>
                <div className=' mx-5 p-5' >
                    <h1>About Us</h1>
                    <p className='text-center'>
                        Travel is the activity of going from one place to another place. When a person makes the same trip every day to work or school, this type of travelling is usually called "commuting." Some people travel to other cities as part of their job. This is called "business travel." When many people travel to a distant place to stay, it is called "human migration".</p>

                    <div className='d-lg-flex justify-content-lg-center'>
                        <div className=' mx-2'> <p className='icon-style2'>{element5}</p>
                        </div>
                        <div className=' mx-2'>
                            <p className='icon-style2'>{element6}</p>
                        </div>
                        <div className=' mx-2'>
                            <p className='icon-style2'>{element7}</p>
                        </div>
                        <div className=' mx-2'>
                            <p className='icon-style2'>{element8}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;