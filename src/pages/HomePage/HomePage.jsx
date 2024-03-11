import React from 'react';

import { HomePageSection } from './HomePage.styled';

import HomePageHero from 'components/HomePageHero/HomePageHero';
import { Container } from 'components/common/Container.styled';
import HomeAboutSection from 'components/HomeAboutSection/HomeAboutSection';
import HomeCounterSection from 'components/HomeCounterSection/HomeCounterSection';
import HomeWhySection from 'components/HomeWhySection/HomeWhySection';

const HomePage = () => {
  return (
    <>
      <HomePageHero />
      <Container>
        <HomePageSection>
          <HomeAboutSection />
          <HomeCounterSection />
          <HomeWhySection />
          {/* <WhyDiv>
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
          </WhyDiv> */}
        </HomePageSection>
      </Container>
    </>
  );
};

export default HomePage;
