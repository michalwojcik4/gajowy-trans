import styled from '@emotion/styled';
import { theme } from '../../theme/theme';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    padding-left: 38px;
    padding-right: 38px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    padding-left: 64px;
    padding-right: 64px;
  }
`;