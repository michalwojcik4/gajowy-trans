import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'constants/routes';

import { Container } from 'components/common/Container.styled';

import { SectionHero, Title, Text, Button } from './HomePageHero.styled';

const HomePageHero = () => {
  return (
    <SectionHero>
      <Container>
        <Title>Profesjonalny transport</Title>
        <Text>
          Twoja pewność dostaw w każdym kolorze. Oferujemy niezawodny transport
          przez Europę. Zapytaj o wycenę już teraz!
        </Text>
        <NavLink to={routes.FORM_PAGE}>
          <Button>Zapytaj o wycenę</Button>
        </NavLink>
      </Container>
    </SectionHero>
  );
};

export default HomePageHero;
