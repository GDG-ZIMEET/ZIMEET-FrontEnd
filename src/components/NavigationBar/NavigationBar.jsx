import React from 'react';
// ...existing code...

const NavigationBar = () => {
    // ...existing code...

    const handleClick = () => {
        console.log('임시 파일일');
    };

    return (
        <nav>
            // ...existing code...
            <button onClick={handleClick}>New Button</button>
            // ...existing code...
        </nav>
    );
};

export default NavigationBar;
