import React from 'react';

import { HomePageSection, Wraper } from './HomePage.styled';

import HomePageHero from 'components/HomePageHero/HomePageHero';
import { Container } from 'components/common/Container.styled';
import HomeAboutSection from 'components/HomeAboutSection/HomeAboutSection';
import HomeCounterSection from 'components/HomeCounterSection/HomeCounterSection';
import HomeWhySection from 'components/HomeWhySection/HomeWhySection';

const HomePage = () => {
  return (
    <>
      <HomePageHero />

      <HomePageSection>
        <Container>
          <Wraper>
            <HomeAboutSection />
            <HomeCounterSection />
            <HomeWhySection />
          </Wraper>
        </Container>
      </HomePageSection>
    </>
  );
};

export default HomePage;
