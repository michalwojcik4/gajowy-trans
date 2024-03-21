import styled from '@emotion/styled';
import { theme } from 'theme/theme';

export const MainSection = styled.section`
  height: fit-content;
  padding: 20px 0;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    padding: 60px 0;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    padding: 100px 0;
  }
`;
