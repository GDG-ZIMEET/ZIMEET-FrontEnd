import * as S from './Styles'; 
import ItemHi22 from '../Hi22/ItemHi22';
import ItemHi11 from '../Hi11/Hi11';
import Tickets from '../Tickets/Tickets';

const ItemShop = () => {
  return (
    <S.ItemShopLayout>
      <ItemHi11 />
      <ItemHi22 />
      <Tickets />
    </S.ItemShopLayout>
  );
};

export default ItemShop;
