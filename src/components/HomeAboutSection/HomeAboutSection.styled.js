import styled from '@emotion/styled';
import { Box } from 'components/common/Box.styled';
import { theme } from 'theme/theme';

export const About = styled(Box)``;

export const TextWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Img = styled.img`
  margin: 0 auto;
  max-width: 550px;
  height: 100%;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    max-width: 45vw;
    margin: 0;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: ${theme.color.red[1]};
  font-size: ${theme.fontSizes[6]};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[7]};
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    font-size: ${theme.fontSizes[8]};
  }
`;

export const Text = styled.p``;
