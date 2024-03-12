import {
  Title,
  Why,
  Img,
  BoxMobile,
  TextBox,
  TitleText,
  Text,
  ExtraBox,
  BoxDesktop,
} from './HomeWhySection.styled';

import srcImg from '../../images/HomeWhySection/handshake.jpg';

import { useIsDesktop } from 'hooks/useIsDesktop';

const HomeWhySection = () => {
  const isDesktop = useIsDesktop();

  return (
    <Why>
      <Title>Dlaczego my?</Title>
      {!isDesktop ? (
        <BoxMobile>
          <Img src={srcImg} alt="Hande shake" />
          <ExtraBox>
            <TextBox>
              <TitleText>Szeroki zakres usług transportowych</TitleText>
              <Text>
                Firma oferuje kompleksowe usługi transportowe, obejmujące
                transport krajowy i międzynarodowy, co daje klientom możliwość
                wyboru odpowiedniego rodzaju transportu.
              </Text>
            </TextBox>
            <TextBox>
              <TitleText>Doświadczony zespół spedytorów</TitleText>
              <Text>
                Zespół pięciu doświadczonych spedytorów zapewnia dostarczenie
                przesyłek na czas i w bezpieczny sposób.
              </Text>
            </TextBox>
            <TextBox>
              <TitleText>Nowoczesna flota pojazdów</TitleText>
              <Text>
                Firma posiada trzy sprawdzone busy o ładowności do 3,5 tony,
                zapewniające niezawodną i efektywną obsługę transportową.
              </Text>
            </TextBox>
            <TextBox>
              <TitleText>
                Łatwe i szybkie składanie zapytań o wycenę transportu
              </TitleText>
              <Text>
                Firma umożliwia klientom łatwe i szybkie składanie zapytań o
                wycenę transportu przez formularz na stronie internetowej.
              </Text>
            </TextBox>
          </ExtraBox>
        </BoxMobile>
      ) : (
        <BoxDesktop>
          <ExtraBox>
            <TextBox>
              <TitleText>Szeroki zakres usług transportowych</TitleText>
              <Text>
                Firma oferuje kompleksowe usługi transportowe, obejmujące
                transport krajowy i międzynarodowy, co daje klientom możliwość
                wyboru odpowiedniego rodzaju transportu.
              </Text>
            </TextBox>
            <TextBox>
              <TitleText>Doświadczony zespół spedytorów</TitleText>
              <Text>
                Zespół pięciu doświadczonych spedytorów zapewnia dostarczenie
                przesyłek na czas i w bezpieczny sposób.
              </Text>
            </TextBox>
          </ExtraBox>
          <Img src={srcImg} alt="Hande shake" />
          <ExtraBox>
            <TextBox>
              <TitleText>Nowoczesna flota pojazdów</TitleText>
              <Text>
                Firma posiada trzy sprawdzone busy o ładowności do 3,5 tony,
                zapewniające niezawodną i efektywną obsługę transportową.
              </Text>
            </TextBox>
            <TextBox>
              <TitleText>
                Łatwe i szybkie składanie zapytań o wycenę transportu
              </TitleText>
              <Text>
                Firma umożliwia klientom łatwe i szybkie składanie zapytań o
                wycenę transportu przez formularz na stronie internetowej.
              </Text>
            </TextBox>
          </ExtraBox>
        </BoxDesktop>
      )}
    </Why>
  );
};

export default HomeWhySection;
