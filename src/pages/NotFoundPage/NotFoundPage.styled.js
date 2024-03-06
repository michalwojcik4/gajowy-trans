import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'theme/theme';

export const Section = styled.section`
  padding: 50px 0;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  height: 100%;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Img = styled.img`
  max-width: 200px;
  height: 100%;
  margin: 0 auto;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    max-width: 370px;
    margin: 0;
  }
`;

export const Description = styled.div``;

export const Title = styled.h2`
  font-size: ${theme.fontSizes[9]};
  color: ${theme.color.gray[1]};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[10]};
  }
`;

export const Text = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${theme.color.gray[1]};
  font-size: ${theme.fontSizes[2]};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[3]};
    max-width: 350px;
  }
`;

export const LinkBack = styled(NavLink)`
  color: ${theme.color.red[1]};

  &:hover,
  &:focus {
    text-decoration: underline ${theme.color.red[1]};
  }
`;
