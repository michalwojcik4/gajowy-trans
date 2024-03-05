import React from 'react';

import HomePageHero from 'components/HomePageHero/HomePageHero';

import {
  AboutDiv,
  HomePageSection,
  Img,
  TitleDiv,
  TitleText,
  Text,
  WhyDiv,
} from './HomePage.styled';
import { Container } from 'components/common/Container.styled';

const HomePage = () => {
  return (
    <>
      <HomePageHero />

      <HomePageSection>
        <Container>
          <AboutDiv>
            <Img src="#" alt="img" />
            <TitleDiv>O nas</TitleDiv>
            <Text>
              Jesteśmy firmą transportową specjalizującą się w logistyce i
              transporcie. Posiadamy trzy busy o ładowności do 3,5 tony oraz
              zespół pięciu doświadczonych spedytorów. Nasze pojazdy regularnie
              pokonują trasy w całej Europie, dostarczając towary na czas i w
              bezpieczny sposób. Naszą misją jest zapewnienie kompleksowych
              usług transportowych, które spełniają oczekiwania klientów.
            </Text>
            <Text>
              Na naszej stronie internetowej można łatwo i szybko złożyć
              zapytanie o wycenę transportu. Wystarczy wypełnić formularz,
              podając szczegóły dotyczące przesyłki, a nasi specjaliści
              skontaktują się w celu przedstawienia korzystnej oferty.
            </Text>
            <Text>
              Nasze barwy to czerwony, ciemnoszary i biały, symbolizujące
              profesjonalizm, solidność i zaangażowanie w świadczenie
              najlepszych usług transportowych na rynku. Zapraszamy do
              zapoznania się z naszą firmą i skorzystania z naszych usług
              transportowych.
            </Text>
          </AboutDiv>
          {/* <Counter/> */}
          <WhyDiv>
            <TitleDiv>Dlaczego my?</TitleDiv>
            <Img src="#" alt="img" />
            <TitleText>Szeroki zakres usług transportowych</TitleText>
            <Text>
              Firma oferuje kompleksowe usługi transportowe, obejmujące
              transport krajowy i międzynarodowy, co daje klientom możliwość
              wyboru odpowiedniego rodzaju transportu.
            </Text>
            <TitleText>Doświadczony zespół spedytorów</TitleText>
            <Text>
              Zespół pięciu doświadczonych spedytorów zapewnia dostarczenie
              przesyłek na czas i w bezpieczny sposób.
            </Text>
            <TitleText>Nowoczesna flota pojazdów</TitleText>
            <Text>
              Firma posiada trzy sprawdzone busy o ładowności do 3,5 tony,
              zapewniające niezawodną i efektywną obsługę transportową.
            </Text>
            <TitleText>
              Łatwe i szybkie składanie zapytań o wycenę transportu
            </TitleText>
            <Text>
              Firma umożliwia klientom łatwe i szybkie składanie zapytań o
              wycenę transportu przez formularz na stronie internetowej.
            </Text>
          </WhyDiv>
        </Container>
      </HomePageSection>
    </>
  );
};

export default HomePage;
