import styled from '@emotion/styled';
import { theme } from 'theme/theme';

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 40px;
  justify-content: space-between;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    flex-direction: row;
    gap: 15px;
  }
`;

export const NumberBox = styled.div`
  color: ${theme.color.red[1]};
  font-size: ${theme.fontSizes[8]};
  font-weight: ${theme.fontWeights.semibold};
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes[3]};
  font-weight: ${theme.fontWeights.regular};
`;
