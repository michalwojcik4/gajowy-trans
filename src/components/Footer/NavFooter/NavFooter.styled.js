import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'theme/theme';

export const Nav = styled.nav``;

export const Title = styled.h2``;

export const NavList = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NavItem = styled.li``;

export const Link = styled(NavLink)`
  color: ${theme.color.white[1]};

  &:hover,
  &:focus {
    color: ${theme.color.red[1]};
  }
`;
