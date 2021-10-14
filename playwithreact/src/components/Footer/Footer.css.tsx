import styled from "styled-components";
import { Container } from "../Navigation/Navigation.css";

export const CustomFooter = styled(Container)`
  background-color: ${({ theme }) => theme.color.gray};
  text-align: center;
`;
