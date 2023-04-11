import styled from "@emotion/styled";

export const FlexItem = styled.div`
flex-basis: 20%;
background-color: #2C3E50;


@media screen and (max-width: 768px) {
  flex-basis: 20%;
}

@media screen and (max-width: 480px) {
  flex-basis: 0%;
  overflow: hidden;

}
`;

export const HeroSectionItem = styled.div`
flex-basis: 80%;

@media screen and (max-width: 768px) {
flex-basis: 80%;
}

@media screen and (max-width: 480px) {
flex-basis: 100%;
}
`

export const ParentItem = styled.div`
display: flex;
`;