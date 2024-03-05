import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from '../../../theme/theme';

export const NavList = styled.ul`
  align-items: center;
  list-style: none;
  display: flex;
  flex-direction: ${props => props.fd || 'row'};

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    gap: 42px;
  }
`;

export const NavItem = styled.li`
  width: 100%;
  text-align: center;

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: auto;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: 20px 0;
  height: 100%;
  color: ${theme.color.black.text};

  @media screen and (max-width: ${theme.breakpoints[1]}) {
    &:hover,
    &:focus {
      background-color: ${theme.color.red[1]};
      color: ${theme.color.white.text};
    }

    &.${props => props.activeclassname} {
      background-color: ${theme.color.red[1]};
      color: ${theme.color.white.text};
    }
  }

  @media screen and (min-width: ${theme.breakpoints[1]}) {
    padding: 0;
    font-weight: ${theme.fontWeights.medium};

    &:hover,
    &:focus {
      background-color: transparent;
      color: ${theme.color.red[1]};
    }

    &.${props => props.activeclassname} {
      background-color: transparent;
      color: ${theme.color.red[1]};
    }
  }
`;
