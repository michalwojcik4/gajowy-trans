import React from 'react';

import { routes } from 'constants/routes';

import Adress from './Adress/Adress';
import NavFooter from './NavFooter/NavFooter';

import {
  Button,
  Container,
  StyledFooter,
  Wrapper,
  NavLinkStyled,
} from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <Adress />
          <NavFooter />
          <NavLinkStyled to={routes.CONTACT_PAGE}>
            <Button>Zapytaj o wycenę!</Button>
          </NavLinkStyled>
        </Wrapper>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
