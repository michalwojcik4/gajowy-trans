import styled from '@emotion/styled';
import { theme } from 'theme/theme';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${theme.color.gray[1]};
  padding: 20px;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    flex-direction: row;
    padding: 40px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    padding: 60px;
  }
`;
