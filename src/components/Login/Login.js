import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInWithGoogle } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/home';
    console.log('came from', location.state?.from);
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirectUri);

            })

    }
    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google SigIn</button>

        </div>
    );
};

export default Login;