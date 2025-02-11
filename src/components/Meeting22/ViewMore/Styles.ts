import styled from 'styled-components';

export const ViewMoreButton = styled.button`
background-color: #ffffff;
color: black;
border: none;
text-align: right;
font-size: 13px;
font-weight: 400;
font-family: 'Pretendard';
line-height: 30px;
margin-right: 2%;
cursor: pointer;
&:hover {
  background-color: #ffffff;
}

@media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    margin-right: 1%;
  }
}
`;