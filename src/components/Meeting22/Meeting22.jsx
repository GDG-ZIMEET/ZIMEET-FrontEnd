import React from 'react';

const Meeting22 = () => {
    const handleClick = () => {
        console.log('Meeting22 button clicked!');
    };

    return (
        <div>
            <button onClick={handleClick}>Meeting22 Button</button>
        </div>
    );
};

export default Meeting22;
