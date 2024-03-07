import React from 'react';
import useFormVisibility from 'hooks/useFormVisibility';

import Adress from './Adress/Adress';
import NavFooter from './NavFooter/NavFooter';
import Modal from 'components/common/Modal/Modal';
import ContactForm from 'components/ContactForm/ContactForm';

import { Button, Container, StyledFooter, Wrapper } from './Footer.styled';

const Footer = () => {
  const { isFormVisible, openForm, closeForm } = useFormVisibility();

  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <Adress />
          <NavFooter />
          <Button onClick={openForm}>Napisz do nas!</Button>
          {isFormVisible && (
            <Modal onClose={closeForm}>
              <ContactForm onClose={closeForm} />
            </Modal>
          )}
        </Wrapper>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
