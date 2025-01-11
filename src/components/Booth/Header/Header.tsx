import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './Styles';

const Header: React.FC = () => {
    const [selected, setSelected] = useState('G');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('/booth')) {
            setSelected('G');
        } else if (location.pathname.includes('/zimeetintroduct')) {
            setSelected('D');
        } else if (location.pathname.includes('/gdgocintroduct')) {
            setSelected('G2');
        }
    }, [location]);

    const handleGClick = () => {
        setSelected('G');
        navigate('/booth');
    };

    const handleDClick = () => {
        setSelected('D');
        navigate('/zimeetintroduct');
    };

    const handleG2Click = () => {
        setSelected('G2');
        navigate('/gdgocintroduct');
    };

    return (
        <S.HeaderLayout>
            {selected === 'G' ? <S.G /> : <S.GGrey onClick={handleGClick} />}
            {selected === 'G' && <S.Ateway />}
            {selected === 'D' ? <S.D /> : <S.Dgrey onClick={handleDClick} />}
            {selected === 'D' && <S.Ating />}
            {selected === 'G2' ? <S.G2 /> : <S.GGrey onClick={handleG2Click} />}
            {selected === 'G2' && <S.DGoc />}
            <S.HeaderLogo className="headerLogo" />
        </S.HeaderLayout>
    );
}

export default Header;