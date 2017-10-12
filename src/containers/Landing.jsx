// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import LandingHero from '../components/LandingHero';
import LandingAnimalsSummary from '../components/LandingAnimalsSummary';
import LandingWorkFlow from '../components/LandingWorkFlow';
import LandingAchievements from '../components/LandingAchievements';
import LandingPartners from '../components/LandingPartners';

import { getRandomAnimalData } from '../actions/landingActions';
import { getLang, getPrefix } from '../reducers/locale'
import randomAnimalData from '../reducers/landing';

const animalsNumber = {
  cats: 123,
  dogs: 529
};

type Props = {
  getRandomAnimal: Function,
  lang: string,
  urlPrefix: string,
  randomAnimal: randomAnimalData
};

class Landing extends Component {
  componentDidMount() {
    this.props.getRandomAnimal(this.props.lang, 'dog');
  }

  props: Props;

  render() {
    return (
      <div>
        <LandingHero randomAnimal={this.props.randomAnimal} urlPrefix={this.props.urlPrefix} />
        <LandingAnimalsSummary animalsNumber={animalsNumber} />
        <LandingWorkFlow />
        <LandingAchievements />
        <LandingPartners urlPrefix={this.props.urlPrefix} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  const lang = getLang(state.locale);
  const urlPrefix = getPrefix(state.locale);
  const randomAnimal = state.randomAnimalData;
  return { lang, randomAnimal, urlPrefix };
};
const mapDispatchToProps = (dispatch: Function) => ({
  getRandomAnimal(lang, type) {
    dispatch(getRandomAnimalData(lang, type));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
