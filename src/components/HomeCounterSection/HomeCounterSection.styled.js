import styled from '@emotion/styled';
import { theme } from 'theme/theme';

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 40px;
  justify-content: space-between;
  background-color: ${theme.color.gray[1]};
  padding: 20px;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    flex-direction: row;
    gap: 10px;
    padding: 40px 20px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    padding: 60px;
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
