import React, { useState } from 'react';

import { useIsMobileOrTablet } from 'hooks/useIsMobileOrTablet';

import { StyledHeader, Container } from './Header.styled';

import Logo from '../Logo/Logo';
import BurgerButton from './BurgerButton/BurgerButton';
import Modal from '../common/Modal/Modal';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Navigation from './Navigation/Navigation';

const Header = () => {
  const [isBurgerMenuShow, setIsBurgerMenuShow] = useState(false);

  const isMobileOrTablet = useIsMobileOrTablet();

  const handleMenuOnClose = () => {
    setIsBurgerMenuShow(false);
  };
  const handleBurgerButton = () => {
    setIsBurgerMenuShow(true);
  };

  return (
    <StyledHeader>
      <Container>
        <Logo />
        {isMobileOrTablet ? (
          !isBurgerMenuShow ? (
            <BurgerButton onClick={handleBurgerButton} />
          ) : (
            <Modal onClose={handleMenuOnClose} isMenu={true}>
              <BurgerMenu onClose={handleMenuOnClose} />
            </Modal>
          )
        ) : (
          <Navigation onClick={handleMenuOnClose} />
        )}
      </Container>
    </StyledHeader>
  );
};

export default Header;
