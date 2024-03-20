import styled from '@emotion/styled';
import { theme } from '../../theme/theme';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    padding-left: 60px;
    padding-right: 60px;
  }
`;
