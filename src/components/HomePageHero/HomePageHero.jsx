import { Container } from 'components/common/Container.styled';
import { SectionHero, Title, Text, Button } from './HomePageHero.styled';

const HomePageHero = () => {
  return (
    <SectionHero>
      <Container>
        <Title>Profesjonalny transport.</Title>
        <Text>
          Twoja pewność dostaw w każdym kolorze. Oferujemy niezawodny transport
          przez Europę. Zapytaj o wycenę już teraz!
        </Text>
        <Button>Zapytaj o wycenę</Button>
      </Container>
    </SectionHero>
  );
};

export default HomePageHero;
