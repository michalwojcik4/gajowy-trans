import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from '../../theme/theme';

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 100px;
  height: auto;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 150px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    width: 200px;
  }
`;
