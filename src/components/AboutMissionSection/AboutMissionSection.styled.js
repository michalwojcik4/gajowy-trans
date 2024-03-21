import styled from '@emotion/styled';
import { Box } from 'components/common/Box.styled';
import { theme } from 'theme/theme';

export const AboutMission = styled(Box)``;

export const Img = styled.img`
  margin: 0 auto;
  max-width: 550px;
  height: 100%;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    max-width: 45vw;
    margin: 0;
  }
`;

export const TextBox = styled.div``;

export const Title = styled.h3`
  margin-bottom: 10px;
  color: ${theme.color.red[1]};
  font-size: ${theme.fontSizes[6]};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    margin-bottom: 20px;
    font-size: ${theme.fontSizes[7]};
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    margin-bottom: 30px;
    font-size: ${theme.fontSizes[8]};
  }
`;

export const Text = styled.p``;
