import styled from '@emotion/styled';

import homePageHero from '../../images/HomePageHero/highway.jpg';
import { theme } from 'theme/theme';

export const SectionHero = styled.section`
  padding-top: 60px;
  width: 100%;
  height: 700px;
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0)),
    url(${homePageHero});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    padding-top: 90px;
    height: 600px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    padding-top: 130px;
  }
`;

export const Title = styled.h1`
  font-size: ${theme.fontSizes[7]};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[8]};
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    font-size: ${theme.fontSizes[9]};
  }
`;

export const Text = styled.p`
  font-size: ${theme.fontSizes[2]};
  margin: 30px 0;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[3]};
    max-width: 510px;
  }
`;

export const Button = styled.button`
  border: solid 2px ${theme.color.red[1]};
  color: ${theme.color.red[1]};
  padding: 15px;
  font-size: ${theme.fontSizes[2]};

  &:hover,
  &:focus {
    background-color: ${theme.color.red[1]};
    color: ${theme.color.white.text};
  }

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[3]};
    padding: 18px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    padding: 22px;
  }
`;
