import styled from '@emotion/styled';
import { ReactComponent as CloseBtnSvg } from '../../../images/svg/closeButton.svg';
import { theme } from '../../../theme/theme';

export const Wrapper = styled.div`
  padding: 15px 0;
  overflow: hidden;
  width: 75%;
  height: 100%;
  background-color: ${theme.color.white[1]};
`;

export const Button = styled.button`
  display: block;
  position: absolute;
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  text-decoration: none;
  cursor: pointer;
  top: 15px;
  right: 21px;
`;

export const Svg = styled(CloseBtnSvg)`
  width: 32px;
  height: 32px;
  fill: ${theme.color.red[1]};
`;
