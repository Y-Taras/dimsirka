// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { getPrefix } from './reducers/locale';

import Landing from './containers/Landing';
import Webcams from './containers/Webcams';
import News from './containers/News';
import Post from './containers/Post';
import Header from './containers/Header';
import Footer from './components/Footer';
import RootRouter from './components/RootRouter';

const FourOhFour = () => <h1>404</h1>;

const Routes = ({ urlPrefix }: { urlPrefix: string }) => (
  <BrowserRouter>
    <div className="app">
      <Route render={props => <Header urlPrefix={urlPrefix} {...props} />} />
      <Switch>
        <RootRouter exact path={'/:lang(en|ru)?'} urlPrefix={urlPrefix} component={Landing} />
        <Route path={'/:lang(en|ru)?/webcams'} component={Webcams} />
{/*
        <Route exact path={'/:lang(en|ru)?/news'} render={props => <News {...props} urlPrefix={urlPrefix} />} />
*/}
        <Route exact path={'/:lang(en|ru)?/news'} component={News} />
        <Route exact path={'/:lang(en|ru)?/news/:id'} component={Post} />
        <Route path={'/:lang(en|ru)?/shop'} component={FourOhFour} />
        <Route component={FourOhFour} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

const mapStateToProps = state => ({ urlPrefix: getPrefix(state.locale) });

export default connect(mapStateToProps)(Routes);
