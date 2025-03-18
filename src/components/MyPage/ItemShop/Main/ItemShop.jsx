import * as S from './Styles'; 
import ItemHi22 from '../Hi22/ItemHi22';
import ItemHi33 from '../Hi33/ItemHi33';
import Tickets from '../Tickets/Tickets';

const ItemShop = () => {
  return (
    <S.ItemShopLayout>
      <ItemHi22 />
      <ItemHi33 />
      <Tickets />
    </S.ItemShopLayout>
  );
};

export default ItemShop;
