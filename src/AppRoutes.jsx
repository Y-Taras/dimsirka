// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { getPrefix } from './reducers/locale';

import Landing from './containers/Landing';
import Webcams from './containers/Webcams';
import Posts from './containers/Posts';
import PostsItem from './containers/PostsItem';
import Header from './containers/Header';
import Footer from './components/Footer';
import RootRouter from './components/RootRouter';
import AboutUs from './components/AboutUs';
import Help from './containers/Help'

const FourOhFour = () => <h1>404</h1>;

const Routes = ({ urlPrefix }: { urlPrefix: string }) => (
  <BrowserRouter>
    <div className="app">
      <Route render={props => <Header urlPrefix={urlPrefix} {...props} />} />
      <Switch>
        <RootRouter exact path="/:lang(en|ru)?" urlPrefix={urlPrefix} component={Landing} />
        <Route path="/:lang(en|ru)?/webcams" component={Webcams} />
        <Route exact path="/:lang(en|ru)?/about/organization" component={AboutUs} />
        <Route exact path="/:lang(en|ru)?/news" component={Posts} />
        <Route exact path="/:lang(en|ru)?/help" component={Help} />
        <Route exact path="/:lang(en|ru)?/news/:category(our|actions|info)" component={Posts} />
        <Route exact path="/:lang(en|ru)?/news/:id" component={PostsItem} />
        <Route path="/:lang(en|ru)?/shop" component={FourOhFour} />
        <Route component={FourOhFour} />
      </Switch>
      <Footer urlPrefix={urlPrefix} />
    </div>
  </BrowserRouter>
);

const mapStateToProps = state => ({ urlPrefix: getPrefix(state.locale) });

export default connect(mapStateToProps)(Routes);
