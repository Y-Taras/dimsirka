// @flow

import React from 'react';
import LandingHero from '../components/LandingHero';
import LandingWorkFlow from '../components/LandingWorkFlow';
import LandingAchievements from '../components/LandingAchievements';
import LandingPartners from '../components/LandingPartners';


const animalsNumber = {
  cats: 123,
  dogs: 529
};

const Landing = () =>
  <div>
    <LandingHero animalsNumber={animalsNumber} />
    <LandingWorkFlow />
    <LandingAchievements />
    <LandingPartners/>
  </div>;

export default Landing;
