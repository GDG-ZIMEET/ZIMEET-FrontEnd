import React from "react";
import { useRecoilValue } from 'recoil';
import * as S from "./Styles";
import { boothDetailState } from "recoilStores/state/boothState";

const ItemInventory: React.FC = () => {
    const boothDetail = useRecoilValue(boothDetailState);

    return (
        <S.ItemInventoryLayout>
            <S.ItemInventoryTitle>아우름제 아이템</S.ItemInventoryTitle>
            <S.ItemContainer>
                {boothDetail?.data.itemList.map((item) => (
                    <S.ItemComponent key={item.itemId}>
                        <S.ItemTitle>• {item.name}</S.ItemTitle>
                        <S.ItemElement>{item.content}</S.ItemElement>
                    </S.ItemComponent>
                ))}
            </S.ItemContainer>
            <S.AccountWrapper>
                <S.Account>{boothDetail?.data.account}</S.Account>
                <S.Time> ( {boothDetail?.data.time} )</S.Time>
            </S.AccountWrapper>
        </S.ItemInventoryLayout>
    );
}

export default ItemInventory;