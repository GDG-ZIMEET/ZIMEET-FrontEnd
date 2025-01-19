import styled from 'styled-components';

export const Meeting22Container = styled.div`
    padding: 6% 3% 0;
    background-color: #FFFFFF;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
<<<<<<< Updated upstream
=======
    filter: ${(props) => (props.isLoggedIn ? 'none' : 'blur(4px)')};
    pointer-events: ${(props) => (props.isLoggedIn ? 'auto' : 'none')};
>>>>>>> Stashed changes
`;

export const Meeting22Title = styled.h1`
    font-size: 15px;
    color: #000000;
    font-weight: bold; 
<<<<<<< Updated upstream
`;
=======
`;
>>>>>>> Stashed changes
