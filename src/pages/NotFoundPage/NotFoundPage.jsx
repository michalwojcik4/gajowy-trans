import { Container } from 'components/common/Container.styled';
import {
  Description,
  Img,
  LinkBack,
  Section,
  Text,
  Title,
  Wrapper,
} from './NotFoundPage.styled';

import imgUrl from '../../images/404Page/404img.png';
import { routes } from 'constants/routes';

const NotFoundPage = () => {
  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <Img src={imgUrl} alt="demage car on the tree" />
            <Description>
              <Title>Oops!</Title>
              <Text>
                Strona nie istnieje. Wróć na stronę główną i spróbuj jeszcze
                raz...
              </Text>
              <LinkBack to={routes.MAIN_PAGE}>Strona Główna</LinkBack>
            </Description>
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};

export default NotFoundPage;
