import React from 'react';
import useFormVisibility from 'hooks/useFormVisibility';

import { Container } from 'components/common/Container.styled';
import Modal from 'components/common/Modal/Modal';
import ContactForm from 'components/ContactForm/ContactForm';

import { SectionHero, Title, Text, Button } from './HomePageHero.styled';

const HomePageHero = () => {
  const { isFormVisible, openForm, closeForm } = useFormVisibility();

  return (
    <SectionHero>
      <Container>
        <Title>Profesjonalny transport</Title>
        <Text>
          Twoja pewność dostaw w każdym kolorze. Oferujemy niezawodny transport
          przez Europę. Zapytaj o wycenę już teraz!
        </Text>
        <Button onClick={openForm}>Zapytaj o wycenę</Button>
        {isFormVisible && (
          <Modal onClose={closeForm}>
            <ContactForm onClose={closeForm} />
          </Modal>
        )}
      </Container>
    </SectionHero>
  );
};

export default HomePageHero;
