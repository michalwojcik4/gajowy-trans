import styled from '@emotion/styled';
import { Box } from 'components/common/Box.styled';
import { theme } from 'theme/theme';

export const Counter = styled(Box)`
  text-align: center;
  gap: 40px;
  justify-content: space-between;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    gap: 10px;
    padding: 40px 20px;
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
