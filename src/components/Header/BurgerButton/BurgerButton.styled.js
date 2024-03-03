import styled from "@emotion/styled";
import { ReactComponent as BurgerButtonSvg } from "../../../images/svg/burgerButton.svg";
import { theme } from "../../../theme/theme";

export const Button = styled.button`
  margin: 0;
  padding: 0;
`;

export const Svg = styled(BurgerButtonSvg)`
  width: 35px;
  height: 35px;

  @media screen and (min-width: ${theme.breakpoints[0]}) {
    width: 45px;
    height: 45px;
  }
`;
