
import * as S from './Styles'; 
import * as I from '../../../assets/Icons';

const Event = () => {
    const handleNavigate = () => {
        window.location.href = 'https://docs.google.com/forms/d/1s9Pwc9ME3OCi0qvRkM3mcwasJU56TicqWp2N5hbqiWE/edit?usp=drivesdk';
    };

    return (
        <S.EventContainer onClick={handleNavigate}>
          <S.EventLogo>
            <I.ZimeetLogo />
          </S.EventLogo>
          <S.EventText>
            <h1>늘품제 EVENT</h1><br/>
            지밋 <b>후기</b>쓰고, 아우름제 때 <b>특별혜택</b> 받자!
          </S.EventText>
          <S.MoveBtn />
        </S.EventContainer>
  );
};

export default Event;
