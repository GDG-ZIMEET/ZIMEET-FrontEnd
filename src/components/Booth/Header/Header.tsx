import React, { useState } from 'react';
import * as S from './Styles';
import { ReactComponent as Ateway } from 'assets/icon/booth/ateway.svg';
import { ReactComponent as D } from 'assets/icon/booth/D.svg';
import { ReactComponent as G } from 'assets/icon/booth/G.svg';
import { ReactComponent as G2 } from 'assets/icon/booth/G.svg';
import { ReactComponent as GDoc } from 'assets/icon/booth/DGoC CUK.svg';
import { ReactComponent as Ating } from 'assets/icon/booth/ating.svg';
import { ReactComponent as Ggrey } from 'assets/icon/booth/G grey.svg';
import { ReactComponent as Dgrey } from 'assets/icon/booth/D grey.svg';
import { ReactComponent as HeaderLogo } from 'assets/icon/booth/headerLogo.svg';

const Header: React.FC = () => {
    const [selected, setSelected] = useState('G');

    return (
        <S.HeaderLayout>
            {selected === 'G' ? <G /> : <Ggrey onClick={() => setSelected('G')} />}
            {selected === 'G' && <Ateway  />}
            {selected === 'D' ? <D /> : <Dgrey onClick={() => setSelected('D')} />}
            {selected === 'D' && <Ating />}
            {selected === 'G2' ? <G2 /> : <Ggrey onClick={() => setSelected('G2')} />}
            {selected === 'G2' && <GDoc />}
            <HeaderLogo className="headerLogo" />
        </S.HeaderLayout>
    );
}

export default Header;