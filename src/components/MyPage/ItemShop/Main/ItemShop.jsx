import * as S from './Styles'; 
import * as I from '../../../../assets/Icons';
import ItemBanner from '../ItemBanner/ItemBanner';
import ItemHi22 from '../Hi22/ItemHi22';
import ItemHi33 from '../Hi33/ItemHi33';
import Tickets from '../Tickets/Tickets';

const ItemShop = ({ userInfo }) => {

  return (
    <S.ItemShopContainer>
      <S.Title>아이템 상점</S.Title>
      <S.Text>ZI밋 출시 기념! 오직 2025 늘품제에서만 이 가격으로!</S.Text>
      <ItemBanner userInfo={userInfo} />
      
      {userInfo?.data && (
        <>
          <ItemHi22 />
          <ItemHi33 />
          <Tickets />
        </>
      )}
    </S.ItemShopContainer>
  );
};

export default ItemShop;
