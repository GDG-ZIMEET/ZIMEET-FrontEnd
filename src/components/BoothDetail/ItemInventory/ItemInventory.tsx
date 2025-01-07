import React from "react";
import * as S from "./Styles";

const ItemInventory: React.FC = () => {
    return (
        <S.ItemInventoryLayout>
            <S.ItemInventoryTitle>늘품제 아이템</S.ItemInventoryTitle>
            <S.ItemContainer>
                <S.ItemComponent>
                    <S.ItemTitle>• 두근두근 2:2, 3:3, 랜덤 <S.Itemhighlight>미팅</S.Itemhighlight></S.ItemTitle>
                    <S.ItemElement>아래 미팅 탭 이용</S.ItemElement>
                </S.ItemComponent>
                <S.ItemComponent>
                    <S.ItemTitle> • 학생증 인증마크 </S.ItemTitle>
                    <S.Check />
                    <S.ItemElement>학생증+민증 인증 시 <S.Itemhighlight>무료</S.Itemhighlight></S.ItemElement>
                </S.ItemComponent>
                <S.ItemComponent>
                    <S.ItemTitle> • GDG on Campus 굿즈 </S.ItemTitle>
                    <S.ItemElement><S.Itemhighlight>1000원</S.Itemhighlight></S.ItemElement>
                </S.ItemComponent>
            </S.ItemContainer>
            <S.Account>카카오뱅크 3333-17-6207512 장세연</S.Account>
            <S.Time> ( 운영 시간 : 10시 ~ 16시 )</S.Time>
        </S.ItemInventoryLayout>
    );
}

export default ItemInventory;