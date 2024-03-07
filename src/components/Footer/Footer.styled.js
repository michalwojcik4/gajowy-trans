import styled from '@emotion/styled';
import { theme } from '../../theme/theme';

import { Container as StyledContainer } from '../common/Container.styled';

export const StyledFooter = styled.footer`
  padding: 20px 0;
  background-color: ${theme.color.gray.footer};
  color: ${theme.color.white.text};
  font-size: ${theme.fontSizes[1]};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    padding: 50px 0;
    font-size: ${theme.fontSizes[2]};
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    font-size: ${theme.fontSizes[3]};
  }
`;

export const Container = styled(StyledContainer)``;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  border: solid 2px ${theme.color.red[1]};
  outline: solid 2px ${theme.color.red[1]};
  background-color: ${theme.color.red[1]};
  color: ${theme.color.white[1]};
  padding: 15px;
  font-size: ${theme.fontSizes[2]};
  margin-block: auto;

  &:hover,
  &:focus {
    border: solid 2px ${theme.color.white[1]};
  }

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    font-size: ${theme.fontSizes[3]};
    padding: 18px;
  }

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    padding: 22px;
  }
`;
