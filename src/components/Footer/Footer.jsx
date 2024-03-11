import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'constants/routes';

import Adress from './Adress/Adress';
import NavFooter from './NavFooter/NavFooter';

import { Button, Container, StyledFooter, Wrapper } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <Adress />
          <NavFooter />
          <NavLink to={routes.CONTACT_PAGE}>
            <Button>Zapytaj o wycenę!</Button>
          </NavLink>
        </Wrapper>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
