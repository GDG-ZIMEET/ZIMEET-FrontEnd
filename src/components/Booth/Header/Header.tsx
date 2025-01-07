import React, { useState } from 'react';
import * as S from './Styles';

const Header: React.FC = () => {
    const [selected, setSelected] = useState('G');

    return (
        <S.HeaderLayout>
            {selected === 'G' ? <S.G /> : <S.GGrey onClick={() => setSelected('G')} />}
            {selected === 'G' && <S.Ateway  />}
            {selected === 'D' ? <S.D /> : <S.Dgrey onClick={() => setSelected('D')} />}
            {selected === 'D' && <S.Ating />}
            {selected === 'G2' ? <S.G2 /> : <S.GGrey onClick={() => setSelected('G2')} />}
            {selected === 'G2' && <S.DGoc />}
            <S.HeaderLogo className="headerLogo" />
        </S.HeaderLayout>
    );
}

export default Header;