import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
                <Container>

                    <Navbar.Brand href="#home">TravelEco</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end me-5 nav-style">


                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        {user?.email ? <Nav.Link as={Link} to="/myorder">My Order</Nav.Link> : <></>}
                        {user?.email ? <Nav.Link as={Link} to="/manageAllOrder">Manage All Orders</Nav.Link> : <></>}
                        {user?.email ? <Nav.Link as={Link} to="/addNewService">Add A New Service</Nav.Link> : <></>}
                        {user?.email ? <button className='btn btn-info' onClick={logOut}>LogOut</button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}



                        <Navbar.Text className='m-3'>
                            <div> Signed in as: <a href="#login">{user.displayName}</a>
                            </div>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>


    );
};

export default Header;