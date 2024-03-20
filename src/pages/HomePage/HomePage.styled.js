import styled from '@emotion/styled';
import { theme } from 'theme/theme';

export const HomePageSection = styled.section`
  height: fit-content;
  padding: 20px 0;
  background-color: ${theme.color.black[1]};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    padding: 60px 0;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    padding: 100px 0;
  }
`;

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    gap: 60px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    gap: 100px;
  }
`;
