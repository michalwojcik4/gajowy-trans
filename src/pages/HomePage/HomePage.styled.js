import styled from '@emotion/styled';
import { theme } from 'theme/theme';

export const HomePageSection = styled.section`
  height: fit-content;
  padding: 100px 0;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    padding: 130px 0;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    padding: 160px 0;
  }
`;

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    gap: 130px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    gap: 160px;
  }
`;
