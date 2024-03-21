import React from 'react';

import AboutPageHero from 'components/AboutPageHero/AboutPageHero';
import { AboutPageSection, Container, FlexSection } from './AboutPage.styled';
import AboutMissionSection from 'components/AboutMissionSection/AboutMissionSection';

const AboutPage = () => {
  return (
    <>
      <AboutPageHero />
      <AboutPageSection>
        <Container>
          <FlexSection>
            <AboutMissionSection />
          </FlexSection>
        </Container>
      </AboutPageSection>
    </>
  );
};

export default AboutPage;
