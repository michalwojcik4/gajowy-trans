import Adress from './Adress/Adress';
import { Button, Container, StyledFooter, Wrapper } from './Footer.styled';
import NavFooter from './NavFooter/NavFooter';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Wrapper>
          <Adress />
          <NavFooter />
          <Button>Napisz do nas!</Button>
        </Wrapper>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
