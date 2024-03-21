import React from 'react';

import {
  AboutMission,
  Img,
  Text,
  TextBox,
  Title,
} from './AboutMissionSection.styled';
import srcImg from '../../images/AboutPage/about-1.jpg';

const AboutMissionSection = () => {
  return (
    <AboutMission>
      <Img src={srcImg} alt="opis" />
      <TextBox>
        <Title>Nasza misja</Title>
        <Text>
          Nasza misja polega na zapewnieniu kompleksowych usług transportowych,
          które spełniają oczekiwania naszych klientów. Działamy jako firma
          transportowa specjalizująca się w logistyce i transporcie. Posiadamy
          flotę trzech busów o ładowności do 3,5 tony oraz zespół pięciu
          doświadczonych spedytorów. Nasze pojazdy regularnie pokonują trasy w
          całej Europie, dostarczając towary na czas i w bezpieczny sposób.
          Nasze barwy - czerwony, ciemnoszary i biały - symbolizują naszą
          profesjonalność, solidność i zaangażowanie w świadczenie najlepszych
          usług transportowych na rynku.
        </Text>
      </TextBox>
    </AboutMission>
  );
};

export default AboutMissionSection;
