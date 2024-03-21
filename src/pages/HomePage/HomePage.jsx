import React from 'react';

import { HomePageSection, FlexSection, Container } from './HomePage.styled';

import HomePageHero from 'components/HomePageHero/HomePageHero';
import HomeAboutSection from 'components/HomeAboutSection/HomeAboutSection';
import HomeCounterSection from 'components/HomeCounterSection/HomeCounterSection';
import HomeWhySection from 'components/HomeWhySection/HomeWhySection';

const HomePage = () => {
  return (
    <>
      <HomePageHero />

      <HomePageSection>
        <Container>
          <FlexSection>
            <HomeAboutSection />
            <HomeCounterSection />
            <HomeWhySection />
          </FlexSection>
        </Container>
      </HomePageSection>
    </>
  );
};

export default HomePage;
