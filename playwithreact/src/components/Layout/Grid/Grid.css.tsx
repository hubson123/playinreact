import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 50% auto auto auto;
  grid-template-columns: 125px auto 100px;
  justify-content: space-evenly;
`;
export const Main = styled.main`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  ${({ theme }) => theme.color.blue};
  overflow: hidden;
`;
export const GridFooter = styled.footer`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 4;
`;
export const LeftBar = styled.aside`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 4;
  background-color: ${({ theme }) => theme.color.navColor};
  text-align: center;
`;
export const RightBar = styled.aside`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
  background-image: radial-gradient(
    circle,
    red,
    ${({ theme }) => theme.color.navColor}
  );
  text-align: center;
`;
export const SubgridContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 3/4;
  display: grid;
  grid-template-columns: 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px;
  grid-template-rows: 30px 30px 30px 30px 30px 30px 30px 30px 30px 30px;
`;

interface ManProps {
  row: number;
  col: number;
}
export const GridMan = styled.div<{
  colStart: number;
  rowStart: number;
  colEnd: number;
  rowEnd: number;
}>`
  grid-column: ${(props) => props.colStart} / ${(props) => props.colEnd};
  grid-row: ${(props) => props.rowStart} / ${(props) => props.rowEnd};
  background-color: ${(props) => props.theme.color.man};
`;
