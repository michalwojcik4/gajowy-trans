import { About, Img, TextWraper, Title, Text } from './HomeAboutSection.styled';

import srcImg from '../../images/HomeAboutSection/SmallTruck.jpeg';

const HomeAboutSection = () => {
  return (
    <About>
      <Img src={srcImg} alt="Small truck" />
      <TextWraper>
        <Title>O nas</Title>
        <Text>
          Jesteśmy firmą transportową specjalizującą się w logistyce i
          transporcie. Posiadamy trzy busy o ładowności do 3,5 tony oraz zespół
          pięciu doświadczonych spedytorów. Nasze pojazdy regularnie pokonują
          trasy w całej Europie, dostarczając towary na czas i w bezpieczny
          sposób. Naszą misją jest zapewnienie kompleksowych usług
          transportowych, które spełniają oczekiwania klientów.
        </Text>
        <Text>
          Na naszej stronie internetowej można łatwo i szybko złożyć zapytanie o
          wycenę transportu. Wystarczy wypełnić formularz, podając szczegóły
          dotyczące przesyłki, a nasi specjaliści skontaktują się w celu
          przedstawienia korzystnej oferty.
        </Text>
        <Text>
          Nasze barwy to czerwony, ciemnoszary i biały, symbolizujące
          profesjonalizm, solidność i zaangażowanie w świadczenie najlepszych
          usług transportowych na rynku. Zapraszamy do zapoznania się z naszą
          firmą i skorzystania z naszych usług transportowych.
        </Text>
      </TextWraper>
    </About>
  );
};

export default HomeAboutSection;
