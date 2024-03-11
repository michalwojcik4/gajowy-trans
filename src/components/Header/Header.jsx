import React from 'react';

import { useIsMobileOrTablet } from 'hooks/useIsMobileOrTablet';
import useModalVisibility from 'hooks/useModalVisibility';

import { StyledHeader, Container } from './Header.styled';

import Logo from '../Logo/Logo';
import BurgerButton from './BurgerButton/BurgerButton';
import Modal from '../common/Modal/Modal';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Navigation from './Navigation/Navigation';

const Header = () => {
  const { isModalVisible, openModal, closeModal } = useModalVisibility();
  const isMobileOrTablet = useIsMobileOrTablet();

  return (
    <StyledHeader>
      <Container>
        <Logo />
        {isMobileOrTablet ? (
          !isModalVisible ? (
            <BurgerButton onClick={openModal} />
          ) : (
            <Modal onClose={closeModal}>
              <BurgerMenu onClose={closeModal} />
            </Modal>
          )
        ) : (
          <Navigation onClick={closeModal} />
        )}
      </Container>
    </StyledHeader>
  );
};

export default Header;
