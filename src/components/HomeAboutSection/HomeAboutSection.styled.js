import styled from '@emotion/styled';
import { theme } from 'theme/theme';

export const About = styled.div`
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
    max-width: 48vw;
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
