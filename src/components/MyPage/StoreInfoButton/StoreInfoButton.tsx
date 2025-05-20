import * as S from './Styles';

const StoreInfoButton = () => {
    const handleClick = () => {
        window.location.href = 'http://pf.kakao.com/_gHxmin';
    };

    return (
        <S.StoreInfoButtonLayout onClick={handleClick}>
            상점에서 결제 후 눌러서 정보를 보내주세요!
        </S.StoreInfoButtonLayout>
    );
};

export default StoreInfoButton; 