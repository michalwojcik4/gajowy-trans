import styled from "@emotion/styled";
import { theme } from "../../../theme/theme";

export const Overlay = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.color.black.overlay};
`;

export const ModalWindow = styled.div`
  overflow: hidden;
  width: 70%;
  height: 100%;
  background-color: ${theme.color.white[1]};

  @media screen and (min-width: ${theme.breakpoints[0]}) {
    width: 40%;
  }
`;
