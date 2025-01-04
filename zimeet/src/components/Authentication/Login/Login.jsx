import React from 'react';

const Login = () => {
    const handleClick = () => {
        console.log('Login button clicked!');
    };

    return (
        <div>
            <button onClick={handleClick}>Login Button</button>
        </div>
    );
};

export default Login;
