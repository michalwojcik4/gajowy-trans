import styled from '@emotion/styled';

import heroImg from '../../images/AboutPage/about-hero.jpg';
import { theme } from 'theme/theme';

export const SectionHero = styled.section`
  margin-top: 20px;
  padding: 30px;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.1)
    ),
    url(${heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    margin-top: 30px;
    padding: 50px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    margin-top: 40px;
    padding: 70px;
  }
`;

export const TitlePage = styled.h2`
  color: ${theme.color.red[1]};
  font-size: ${theme.fontSizes[7]};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[8]};
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    font-size: ${theme.fontSizes[9]};
  }
`;
