import styled from '@emotion/styled';
import { theme } from 'theme/theme';

export const Flex = styled.div`
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
